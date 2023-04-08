import { PokeballLoading } from "./pokeballLoading"
import "./style/pokemonImage.css"

interface PokemonImage {
    imagePath : string
}

export const PokemonImage = (props : PokemonImage) => {
    if(props.imagePath == "")
        return <PokeballLoading></PokeballLoading>

    return (
        <img src={props.imagePath} className="imageSizing"></img>
    )
}