import './pokemonCard.css'
import { PokemonType } from './pokemonType'
import { PokemonImage } from './pokemonImage'
import IPokemonType from '../interfaces/IPokemonType'
import IPokemonUrl from '../interfaces/IPokemonUrl'
import IPokemonData from '../interfaces/IPokemonData'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface PokemonCard {
    PokemonAPIUrl : IPokemonUrl
}

export const PokemonCard = (props : PokemonCard) => {
    const [pokemonData, setPokemonData] = useState<IPokemonData>({ } as IPokemonData);
    const [isLoading, setLoading] = useState(true);

    const capitalizeFirstWord = (Name : string) => {
        const str = Name.charAt(0);
        return str.toUpperCase() + Name.slice(1); 
    }

    useEffect( () => {
        const getPokemonData = async (url : IPokemonUrl) => {
            const res = await axios.get(url.url);
            console.log(res.data);
            setPokemonData(res.data);
            setLoading(false);
        }

        getPokemonData(props.PokemonAPIUrl);
    }, []);

    if(isLoading)
        return <div className="App">Loading...</div>;
    return (
        <div className="pokemonCard">
            <div className='cardHeader'>
               <label className='pokemonName'>
                   {capitalizeFirstWord(props.PokemonAPIUrl.name)}
               </label>
           </div>
           <div className='pokeballBelt'>
               <div className='pokeballButton'>
                   <div className='whiteButton'>
                   </div>
               </div>
           </div>
           <div className='cardBody'>
               <PokemonImage imagePath={pokemonData.sprites.front_default}></PokemonImage>
           </div>
           <div className='cardBottom'>
                {pokemonData.types.map((type: IPokemonType) => {
                        return <PokemonType key={props.PokemonAPIUrl.name + type.type.name} tipo={type.type.name}></PokemonType>
                    })
                }
           </div>
        </div>
    );
}