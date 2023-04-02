import { PokemonCard } from './pokemonCard'
import IPokemonUrl from '../interfaces/IPokemonUrl';
import "./style/pokemonCardList.css"

interface IPokemonCardList {
    PokemonUrlList : IPokemonUrl[],
    PokeballType? : number
}

export const PokemonCardList = (props : IPokemonCardList) => {
    return(
        <div className='pokemonCardList'>
            {props.PokemonUrlList.map((url: IPokemonUrl) => {
                return <PokemonCard 
                        key={url.name} 
                        PokemonAPIUrl={url}
                        ></PokemonCard>
            })}
        </div>
    )
}