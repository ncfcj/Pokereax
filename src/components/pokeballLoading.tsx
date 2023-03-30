import "./pokeballLoading.css"
import { SvgIcon } from "./SvgIcon";

interface IPokeballLoading {

}

export const PokeballLoading = (props : IPokeballLoading) => {
    return (
    <div className="loading">
        <SvgIcon 
            iconPath={getPokeball()}
            wrapperStyle={getLoadingStyle}></SvgIcon>
    </div>)
}

const getPokeball = () => {
    let randInt = Math.floor(Math.random() * 4) + 1; // Random number from 1 to 4

    switch (randInt) {
        case 1:
            return "../src/assets/pokeballs/Pokeball.png"

        case 2:
            return "../src/assets/pokeballs/Greatball.png"

        case 3:
            return "../src/assets/pokeballs/Ultraball.png"

        case 4:
            return "../src/assets/pokeballs/Masterball.png"

        default:
            return "";
    }
}

const getLoadingStyle : React.CSSProperties = {
    position: 'relative',
    animation: 'rotation 1.8s ease-in-out infinite',
}