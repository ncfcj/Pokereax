import { useLocation } from "react-router-dom";
import { PokedexFooter } from "./pokedexFooter";
import "./style/pokemonDescription.css";
import IPokemonData from "../interfaces/IPokemonData";
import IPokemonSpecies from "../interfaces/IPokemonSpecies";

export const PokemonDescription = () => {
    const location = useLocation();
    const pokemonData : IPokemonData = location.state?.data;
    const pokemonSpecies : IPokemonSpecies = location.state?.species;

    return (
        <div>
            <h1>TESTE ROUTER {pokemonData.name}</h1>
            <h1>TESTE ROUTER {pokemonSpecies.name}</h1>
            <PokedexFooter isGenZero={true}></PokedexFooter>
        </div>
    );
}