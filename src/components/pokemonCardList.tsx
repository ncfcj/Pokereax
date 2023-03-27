import { PokemonCard } from './pokemonCard'
import IPokemonUrl from '../interfaces/IPokemonUrl';

interface IPokemonCardList {
    PokemonUrlList : IPokemonUrl[]
}

export const PokemonCardList = (props : IPokemonCardList) => {
    return(
        <>
            {props.PokemonUrlList.map((url: IPokemonUrl) => {
                return <PokemonCard 
                        key={url.name} 
                        PokemonAPIUrl={url}
                        ></PokemonCard>
            })}
        </>
    )
}