import './style/pokemonCard.css'
import { PokemonType } from './pokemonType'
import { PokemonImage } from './pokemonImage'
import IPokemonType from '../interfaces/IPokemonType'
import IPokemonUrl from '../interfaces/IPokemonUrl'
import IPokemonData from '../interfaces/IPokemonData'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { PokeballLoading } from './pokeballLoading'
import IPokemonSpecies from '../interfaces/IPokemonSpecies'
import { PokemonCardHeader } from './pokemonCardHeader'
import { Link } from 'react-router-dom'

interface PokemonCard {
    PokemonAPIUrl : IPokemonUrl
}

export const PokemonCard = (props : PokemonCard) => {

    //#region States
    const [pokemonData, setPokemonData] = useState<IPokemonData>({ } as IPokemonData);
    const [isLoading, setLoading] = useState<boolean>(true);
    const [pokemonSpeciesData, setPokemonSpeciesData] = useState<IPokemonSpecies>({ } as IPokemonSpecies);
    const [randomNumber, setRandomNumber] = useState<number>(0);
    //#endregion

    //#region Methods
    const getPokemonData = async (url : IPokemonUrl) => {
        const res = await axios.get(url.url);
        setPokemonData(res.data);
        getPokemonSpeciesData(res.data.species);
        setLoading(false);
    }

    const getPokemonSpeciesData = async (url : IPokemonUrl) => {
        const res = await axios.get(url.url);
        setPokemonSpeciesData(res.data);
        setLoading(false);
    }
    //#endregion

    useEffect( () => {
        getPokemonData(props.PokemonAPIUrl);
        setRandomNumber(Math.floor((Math.random() * 300) + 1));
    }, []);

    if(isLoading)
        return <PokeballLoading></PokeballLoading>;
        
    return (
        <Link to={`/pokemon/${pokemonData.name}`} state={{ data : pokemonData, species : pokemonSpeciesData}} className={`pokemonCard ${randomNumber >= 99 && randomNumber <= 100 ? "shiny" : ""} ${pokemonSpeciesData.is_legendary ? "legendary" : "" } ${pokemonSpeciesData.is_mythical ? "mythical" : ""}`}>
            <PokemonCardHeader PokemonName={pokemonData.name}></PokemonCardHeader>
            <div className='pokeballBelt'>
                <div className='pokeballButton'>
                    <div className='whiteButton'>
                    </div>
                </div>
            </div>
            <div className='cardBody'>
                <PokemonImage imagePath={randomNumber >= 99 && randomNumber <= 100 ? pokemonData.sprites.front_shiny : pokemonData.sprites.front_default}></PokemonImage>
            </div>
            <div className='cardBottom'>
                {pokemonData.types.map((type: IPokemonType) => {
                        return <PokemonType key={props.PokemonAPIUrl.name + type.type.name} tipo={type.type.name}></PokemonType>
                    })
                }
            </div>
        </Link>
    );
}