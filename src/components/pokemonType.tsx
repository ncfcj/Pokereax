import "./pokemonType.css"
import { SvgIcon } from "./SvgIcon"

interface PokemonTypeProps {
    tipo : any
}

export const PokemonType = (props : PokemonTypeProps) => {

    const recuperarEstiloTipo = (tipo : string) => {
        return `${tipo}Gradiente`;
    }
    
    const recuperarCaminhoImagemTipo = (tipo : string) => {
        return `types/${tipo}.svg`;
    }
    
    const iconStyle: React.CSSProperties = {
        width: '20%',
        height: '50%',
        filter: 'drop-shadow( 1px 1px 1px black)'
    }
    
    const capitalizeFirstWord = (tipo : string) => {
        const str = tipo.charAt(0);
        return str.toUpperCase() + tipo.slice(1); 
    }

    return (
        <div className={recuperarEstiloTipo(props.tipo) + " pokemonType"}>
            <SvgIcon 
                iconPath={recuperarCaminhoImagemTipo(props.tipo)} 
                wrapperStyle={iconStyle}></SvgIcon>
            <div className="pokemonTypeName">{capitalizeFirstWord(props.tipo)}</div>
        </div>
    )
}



 