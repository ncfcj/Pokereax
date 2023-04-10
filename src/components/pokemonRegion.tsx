import axios from "axios";
import { useEffect, useState } from "react";

interface IPokemonRegion {
    locationUrl : string
}

export const PokemonRegion = (props : IPokemonRegion) => {
    // TODO : interface de regiao
    const [location, setLocation] = useState<string>();
    
    const getLocation = async () => {
        const res = await axios.get(props.locationUrl);
        
    }

    useEffect(() => {

    }, [])

    return (
        <></>
    );
}