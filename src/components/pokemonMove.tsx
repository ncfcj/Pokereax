import { useEffect, useState } from "react";
import "./style/pokemonMove.css";
import axios from "axios";
import { IMove } from "../interfaces/IMove";
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { Typography } from "@mui/material";

interface IPokemonMoveComponent {
    moveUrl : string
}

export const PokemonMove = (props : IPokemonMoveComponent) => {
    const [moveData, setMoveData] = useState<IMove>();
    
    const getMoveDamageTypeImagePath = (damageType? : string) => `/damage-types/${damageType}.png`;

    const getMoveData = async () => {
        const res = await axios.get(props.moveUrl);
        setMoveData(res.data);
    }

    const getEnglishFlavorText = () => {
        return moveData?.flavor_text_entries?.find(x => x.language?.name == "en")?.flavor_text;
    }

    const capitalizeFirstWord = (Name? : string) => {
        if(Name == undefined)
            return "";
    
        const str = Name.charAt(0);
        return str.toUpperCase() + Name.slice(1); 
    }

    useEffect(() => {
        getMoveData();
    }, [props.moveUrl])

    return(
        <Tooltip title={
                <div className="tooltipMove">
                    <div className="tooltipTitle">
                        <img src={getMoveDamageTypeImagePath(moveData?.damage_class?.name)}></img>
                        <div>{capitalizeFirstWord(moveData?.name)}</div>
                    </div>
                    <div className="tooltipBody">
                        {getEnglishFlavorText()}
                    </div>
                </div>}>
                <div className="moveContainer">
                    <div className="move">
                        <div className="moveType">
                            <img src={getMoveDamageTypeImagePath(moveData?.damage_class?.name)}></img>
                        </div>
                        <div className="description">
                            <div className="moveName">{capitalizeFirstWord(moveData?.name)}</div>
                            {/* <div className="moveDescription">{getEnglishFlavorText()}</div> */}
                        </div>
                    </div>
                </div>
        </Tooltip>
    )
}