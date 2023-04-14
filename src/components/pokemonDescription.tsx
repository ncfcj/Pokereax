import { redirect, useLocation, useNavigate } from "react-router-dom";
import { PokedexFooter } from "./pokedexFooter";
import "./style/pokemonDescription.css";
import IPokemonData from "../interfaces/IPokemonData";
import IPokemonSpecies from "../interfaces/IPokemonSpecies";
import { PokedexHeader } from "./pokedexHeader";
import { useEffect, useState } from "react";
import axios from "axios";
import { PokemonDescriptionButton } from "./pokemonDescriptionButton";
import { PokemonStats } from "./pokemonStats";
import { PokemonType } from "./pokemonType";
import { PokeballLoading } from "./pokeballLoading";
import { PokemonFlavorTextList } from "./pokemonFlavorTextList";
import { PokemonMove } from "./pokemonMove";

export const PokemonDescription = () => {
    let navigate = useNavigate();
    const pokemonTotalCount = 1008;
    const firstPokemonId = 1;

    //#region ReactRouter Location Handling
    const location = useLocation();
    const locationPokemonData : IPokemonData = location.state?.data;
    const locationPokemonSpecies : IPokemonSpecies = location.state?.species;
    const locationRandomNumber : number = location.state?.randomNumber;
    const locationPokemonName : string = location.pathname.replaceAll("/pokemon/", "");
    //#endregion

    //#region States
    const [pokemonData, setPokemonData] = useState<IPokemonData>({} as IPokemonData);
    const [pokemonSpecies, setPokemonSpecies] = useState<IPokemonSpecies>({} as IPokemonSpecies);
    
    const [nextPokemonDataUrl, setNextPokemonDataUrl] = useState<string>("");
    const [previousPokemonDataUrl, setPreviousPokemonDataUrl] = useState<string>("");

    const [randomNumber, setRandomNumber] = useState<number>(0);

    //#endregion

    //#region Methods
    const getPokemonData = async () => {
        if (locationPokemonData != undefined){
            setPokemonData(locationPokemonData);

            if (locationPokemonData.id == pokemonTotalCount){
                setNextPokemonDataUrl(`https://pokeapi.co/api/v2/pokemon/${firstPokemonId}`);
                setPreviousPokemonDataUrl(`https://pokeapi.co/api/v2/pokemon/${locationPokemonData.id - 1}`);
                return;
            }

            if (locationPokemonData.id == firstPokemonId){
                setNextPokemonDataUrl(`https://pokeapi.co/api/v2/pokemon/${locationPokemonData.id + 1}`);
                setPreviousPokemonDataUrl(`https://pokeapi.co/api/v2/pokemon/${pokemonTotalCount}`);
                return;
            }

            setNextPokemonDataUrl(`https://pokeapi.co/api/v2/pokemon/${locationPokemonData.id + 1}`);
            setPreviousPokemonDataUrl(`https://pokeapi.co/api/v2/pokemon/${locationPokemonData.id - 1}`);

            return;
        }

        try{
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${locationPokemonName}`);
            setPokemonData(res.data);
    
            if (res.data.id == pokemonTotalCount){
                setNextPokemonDataUrl(`https://pokeapi.co/api/v2/pokemon/${firstPokemonId}`);
                setPreviousPokemonDataUrl(`https://pokeapi.co/api/v2/pokemon/${res.data.id - 1}`);
                return;
            }
        
            if (res.data.id == firstPokemonId){
                setNextPokemonDataUrl(`https://pokeapi.co/api/v2/pokemon/${res.data.id + 1}`);
                setPreviousPokemonDataUrl(`https://pokeapi.co/api/v2/pokemon/${pokemonTotalCount}`);
                return;
            }
        
            setNextPokemonDataUrl(`https://pokeapi.co/api/v2/pokemon/${res.data.id + 1}`);
            setPreviousPokemonDataUrl(`https://pokeapi.co/api/v2/pokemon/${res.data.id - 1}`);
        }
        catch(err){
            return navigate("/");
        }
        
        return;
    }

    const getPokemonSpecies = async () => {
        if (locationPokemonSpecies != undefined){
            setPokemonSpecies(locationPokemonSpecies);
            return;
        }

        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${locationPokemonName}`);
        setPokemonSpecies(res.data);
    }

    const capitalizeFirstWord = (Name : string) => {
        if(Name == undefined)
            return "";
    
        const str = Name.charAt(0);
        return str.toUpperCase() + Name.slice(1); 
    }
    //#endregion

    useEffect(() => {
        getPokemonData();
        getPokemonSpecies();
        setRandomNumber(locationRandomNumber == undefined ? Math.floor((Math.random() * 300) + 1) : locationRandomNumber);
    }, [locationPokemonName]);

    return (
        <div className="container">
            <PokedexHeader></PokedexHeader>
            <div className="siteBody">
                <div className="reducedPokemonButtons">
                    <PokemonDescriptionButton pokemonDataUrl={previousPokemonDataUrl} isNextPokemon={false}></PokemonDescriptionButton>
                    <PokemonDescriptionButton pokemonDataUrl={nextPokemonDataUrl} isNextPokemon={true}></PokemonDescriptionButton>
                </div>
                <div className="previousPokemonButton">
                    <PokemonDescriptionButton pokemonDataUrl={previousPokemonDataUrl} isNextPokemon={false}></PokemonDescriptionButton>
                </div>
                <div className="pokemonDescription">
                    <div className={`pokemonTitle ${randomNumber >= 99 && randomNumber <= 100 ? "shiny" : ""} ${pokemonSpecies.is_legendary ? "legendary" : ""} ${pokemonSpecies.is_mythical ? "mythical" : ""}`}>
                        <p className="title">{capitalizeFirstWord(pokemonData.name)}</p>
                        <img className="imageDescription" src={Object.keys(pokemonData).length == 0 ? "" : randomNumber >= 99 && randomNumber <= 100 ? pokemonData.sprites.front_shiny : pokemonData.sprites.front_default}></img>
                    </div>
                    <div className="pokemonDescriptionStats">
                        <PokemonStats pokemonStats={pokemonData.stats}></PokemonStats>
                    </div>
                    <div className="aboutPokemon">
                        <div className="pokemonTypes">
                            {pokemonData.types != undefined ? pokemonData.types.map(type => {
                                return <PokemonType key={type.type.name} tipo={type.type.name}></PokemonType>
                            }) : <PokeballLoading></PokeballLoading>}
                        </div>
                        <div className="pokemonTrivia">
                            <p>Weight: {pokemonData.weight / 10} Kg</p>
                            <p>Height: {pokemonData.height * 10} Cm</p>
                        </div>
                    </div>
                    <div className="moves">
                            { pokemonData.moves != undefined ? pokemonData.moves.map(x => {
                                return <PokemonMove key={x.move.name} moveUrl={x.move.url}></PokemonMove>
                            }) : <PokeballLoading></PokeballLoading> }
                    </div>
                    <div className="flavorTexts">
                        <PokemonFlavorTextList key="flavorTexts" FlavorTextList={pokemonSpecies.flavor_text_entries}></PokemonFlavorTextList>
                    </div>
                </div>
                <div className="nextPokemonButton">
                    <PokemonDescriptionButton pokemonDataUrl={nextPokemonDataUrl} isNextPokemon={true}></PokemonDescriptionButton>
                </div>
            </div>
            <PokedexFooter isGenZero={false} margin={0}></PokedexFooter>
        </div>
    );
}