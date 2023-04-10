import { useEffect, useState } from "react";
import { IPokemonFlavorText } from "../interfaces/IPokemonFlavorText";
import "./style/pokemonFlavorTextList.css";

interface IPokemonFlavorTextList {
    FlavorTextList : IPokemonFlavorText[]
}

const enum ELanguages {
    English = "en",
    Portuguese = "pt-BR",
    Japanese = "ja-Hrkt",
}

export const PokemonFlavorTextList = (props : IPokemonFlavorTextList) => {
    const [flavorTexts, setFlavorTexts] = useState<string[]>([] as string[]);
    
    const filterFlavorTextsByLanguage = (language : ELanguages) => {
        if (props.FlavorTextList == undefined) return;
        if (props.FlavorTextList.length == 0) return;

        var flavorTextSet = new Set<string>();
        props.FlavorTextList.forEach((flavorText) => {
            if(flavorText.language.name == language)
                flavorTextSet.add(flavorText.flavor_text);
        });

        var flavorTextArray = Array.from(flavorTextSet.values());
        setFlavorTexts(flavorTextArray);
    }

    useEffect(() => {
        filterFlavorTextsByLanguage(ELanguages.English);
    }, [props.FlavorTextList]);

    return(
        <ol className="flavorTextListContainer">
            {flavorTexts.map(flavorText => {
                return <li className="flavorText">{flavorText}<br/><br/></li>
            })}
        </ol>
    )
}