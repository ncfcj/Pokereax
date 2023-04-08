import { Bar, BarChart, LabelList, Legend, ResponsiveContainer, Tooltip, XAxis } from "recharts"
import IPokemonStats from "../interfaces/IPokemonStats"
import { useEffect, useState } from "react"
import { IPokemonStatsData } from "../interfaces/IPokemonStatsData"
import "./style/pokemonStats.css"
interface IPokemonStatsProps {
    pokemonStats : IPokemonStats[]
}

export const PokemonStats = (props: IPokemonStatsProps) => {
    const [data, setData] = useState<IPokemonStatsData[]>([] as IPokemonStatsData[])

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
            <Bar dataKey="base_stat">
                <LabelList dataKey="base_stat" style={{ textAnchor: 'middle', fontSize: '80%', fill: 'white' }}/>
            </Bar>
            <XAxis dataKey="statName" style={{ color: 'black', fontFamily: 'PokemonGb', fontSize: "0.5rem"}}/>
            <Tooltip content={<CustomTooltip/>} cursor={false}/>
            <Legend formatter={() => "Base Stats"}/>
        </BarChart>
    </ResponsiveContainer>
    )
}

interface ICustomTooltip  {
    active? : boolean, 
    payload? : any, 
    label? : string
}

const CustomTooltip = (props : ICustomTooltip) => {
    if (props.active && props.payload && props.payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${props.label} : ${props.payload[0].value}`}</p>
        </div>
      );
    }
  
    return null;
};