import { useLocation } from "react-router-dom";
import { PokedexFooter } from "./pokedexFooter";
import "./style/pokemonDescription.css";
import IPokemonData from "../interfaces/IPokemonData";
import IPokemonSpecies from "../interfaces/IPokemonSpecies";
import { PokedexHeader } from "./pokedexHeader";
import { useEffect, useState } from "react";
import axios from "axios";
import { PokemonDescriptionButton } from "./pokemonDescriptionButton";
import { PokemonImage } from "./pokemonImage";
import IPokemonStats from "../interfaces/IPokemonStats";
import { PokemonStats } from "./pokemonStats";

export const PokemonDescription = () => {
    const location = useLocation();
    const locationPokemonData : IPokemonData = location.state?.data;
    const locationPokemonSpecies : IPokemonSpecies = location.state?.species;
    const locationPokemonName : string = location.pathname.replaceAll("/pokemon/", "");

    const pokemonTotalCount = 1008;
    const firstPokemonId = 1;

    //#region States
    const [pokemonData, setPokemonData] = useState<IPokemonData>({} as IPokemonData);
    const [pokemonSpecies, setPokemonSpecies] = useState<IPokemonSpecies>({} as IPokemonSpecies);
    
    const [nextPokemonDataUrl, setNextPokemonDataUrl] = useState<string>("");
    const [previousPokemonDataUrl, setPreviousPokemonDataUrl] = useState<string>("");

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
    }, [locationPokemonName]);

    return (
        <div className="container">
            <PokedexHeader></PokedexHeader>
            <div className="siteBody">
                <PokemonDescriptionButton pokemonDataUrl={previousPokemonDataUrl} isNextPokemon={false}></PokemonDescriptionButton>
                <div className="pokemonDescription">
                    <div className="pokemonTitle">
                        <p className="title">{capitalizeFirstWord(pokemonData.name)}</p>
                        <PokemonImage imagePath={Object.keys(pokemonData).length == 0 ? "" : pokemonData.sprites.front_default}></PokemonImage>
                    </div>
                    <div className="pokemonDescriptionStats">
                        <PokemonStats pokemonStats={pokemonData.stats}></PokemonStats>
                    </div>
                </div>
                <PokemonDescriptionButton pokemonDataUrl={nextPokemonDataUrl} isNextPokemon={true}></PokemonDescriptionButton>
            </div>
            <PokedexFooter isGenZero={true} margin={0}></PokedexFooter>
        </div>
    );
}