import "./pokemonImage.css"

interface PokemonImage {
    imagePath : string
}

export const PokemonImage = (props : PokemonImage) => {
    return (
        <img src={props.imagePath} className="imageSizing"></img>
    )
}