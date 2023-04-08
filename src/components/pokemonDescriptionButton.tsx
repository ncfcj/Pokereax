import { useEffect, useState } from "react";
import { PokemonImage } from "./pokemonImage";
import axios from "axios";
import IPokemonData from "../interfaces/IPokemonData";
import { PokeballLoading } from "./pokeballLoading";
import "./style/pokemonDescriptionButton.css"
import { Link } from "react-router-dom";

interface IPokemonDescriptionButton { 
    pokemonDataUrl : string,
    isNextPokemon : boolean
}

export const PokemonDescriptionButton = (props: IPokemonDescriptionButton) => {
    const [pokemonData, setPokemonData] = useState<IPokemonData>({} as IPokemonData);

    const capitalizeFirstWord = (Name : string) => {
        if(Name == undefined)
            return "";
    
        const str = Name.charAt(0);
        return str.toUpperCase() + Name.slice(1); 
    }

    const getPokemonData = async (url : string) => {
        if(url == "")
            return;

        const res = await axios.get(url);
        setPokemonData(res.data);
    }

    useEffect(() => {
        getPokemonData(props.pokemonDataUrl);
    }, [props.pokemonDataUrl]);

    if(Object.keys(pokemonData).length != 0)
        return (
            <div className={props.isNextPokemon ? "nextPokemon" : "previousPokemon"}>
                <Link to={`/pokemon/${pokemonData.name}`}>
                    <button className={`pokemonButton ${props.isNextPokemon ? "next" : "previous"}`}>
                        <h4 className="name">{capitalizeFirstWord(pokemonData.name)}</h4>
                        <PokemonImage imagePath={pokemonData.sprites.front_default}></PokemonImage>
                    </button>
                </Link>
            </div>
        );
    else{
        return <PokeballLoading></PokeballLoading>
    }
}