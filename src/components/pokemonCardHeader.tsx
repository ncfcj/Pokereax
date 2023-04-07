import "./style/pokemonCardHeader.css"

interface IPokemonCardHeader {
    PokemonName : string
}

export const PokemonCardHeader = (props : IPokemonCardHeader) => {
    const capitalizeFirstWord = (Name : string) => {
        const str = Name.charAt(0);
        return str.toUpperCase() + Name.slice(1); 
    }

    // Pokeball
     return ( 
        <div className={`cardHeader pokeball`}>
            <label className='pokemonName'>
                {capitalizeFirstWord(props.PokemonName)}
            </label>
        </div>);
}