import "./style/pokeballLoading.css"
import { SvgIcon } from "./SvgIcon";

interface IPokeballLoading {
}

export const PokeballLoading = (props : IPokeballLoading) => {
    const basePath = import.meta.env.BASE_URL;

    const getPokeball = () => {
        let randInt = Math.floor(Math.random() * 4) + 1; // Random number from 1 to 4
    
        switch (randInt) {
            case 1:
                return `${basePath}pokeballs/Pokeball.png`
    
            case 2:
                return `${basePath}pokeballs/Greatball.png`
    
            case 3:
                return `${basePath}pokeballs/Ultraball.png`
    
            case 4:
                return `${basePath}pokeballs/Masterball.png`
    
            default:
                return "";
        }
    }
    
    const getLoadingStyle : React.CSSProperties = {
        position: 'relative',
        animation: 'rotation 1.8s ease-in-out infinite',
    }

    return (
    <div className="loading">
        <SvgIcon 
            iconPath={getPokeball()}
            wrapperStyle={getLoadingStyle}></SvgIcon>
    </div>)
}