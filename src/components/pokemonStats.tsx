import { Bar, BarChart, Cell, LabelList, Legend, ResponsiveContainer, Tooltip, XAxis } from "recharts"
import IPokemonStats from "../interfaces/IPokemonStats"
import { useEffect, useState } from "react"
import { IPokemonStatsData } from "../interfaces/IPokemonStatsData"

interface IPokemonStatsProps {
    pokemonStats : IPokemonStats[]
}

export const PokemonStats = (props: IPokemonStatsProps) => {
    const [data, setData] = useState<IPokemonStatsData[]>([] as IPokemonStatsData[])

    const capitalizeFirstWord = (Name : string) => {
        if(Name == undefined)
            return "";
    
        const str = Name.charAt(0);
        return str.toUpperCase() + Name.slice(1); 
    }

    const formatStatName = (statName : string) => {
        switch (statName) {
            case "hp":
                return "HP";
            
            case "attack":
                return "Attack";
            
            case "defense":
                return "Defense";
            
            case "special-attack":
                return "Sp.Atk";
            
            case "special-defense":
                return "Sp.Def";
            
            case "speed":
                return "Speed"
        
            default:
                return "";
        }
    }

    const getColorByStat = (statName : string) => {
        switch (statName) {
            case "hp":
                return "#ff0000";
            
            case "attack":
                return "#f08030";
            
            case "defense":
                return "#f8d030";
            
            case "special-attack":
                return "#6890f0";
            
            case "special-defense":
                return "#78c850";
            
            case "speed":
                return "#f85888"
        
            default:
                return "";
        }
    }

    const mapPokemonStats = () => {
        let statArray = [] as IPokemonStatsData[];

        if(props.pokemonStats == undefined) return;

        props.pokemonStats.forEach((stat) => statArray.push(
            {
                statName: formatStatName(stat.stat.name),
                base_stat: stat.base_stat,
                fill: getColorByStat(stat.stat.name)
            } as IPokemonStatsData
        ));

        setData(statArray);
        console.log(statArray);
    }

    useEffect(() => {
        mapPokemonStats();
    }, [props.pokemonStats]);

    return (
    <ResponsiveContainer>
        <BarChart data={data}>
            <Bar dataKey="base_stat" fill="">
                <LabelList dataKey="base_stat" style={{ textAnchor: 'middle', fontSize: '80%', fill: 'white' }}/>
            </Bar>
            <XAxis dataKey="statName"/>
            <Tooltip labelFormatter={(name) => capitalizeFirstWord(name)} />
            <Legend formatter={() => "Base Stats"}/>
        </BarChart>
    </ResponsiveContainer>
    )
}