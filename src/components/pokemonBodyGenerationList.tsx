import { useEffect, useState } from "react";
import { PokemonCardList } from "./pokemonCardList";
import "./style/pokemonBodyGenerationList.css"
import IPokemonUrl from "../interfaces/IPokemonUrl";
import axios from "axios";
import { PokedexFooter } from "./pokedexFooter";
import { PokedexHeader } from "./pokedexHeader";
import { useLocation } from "react-router-dom";

export const PokemonBodyGenerationList = () => {
    const [pokemonUrlList, setPokemonUrlList] = useState<IPokemonUrl[]>([] as IPokemonUrl[]);
    const [generation, setGeneration] = useState<number>(0);
    const [scrolled, setScrolled] = useState<boolean>(false);

    const totalPokemonCount = 1008;
    const location = useLocation();
    const locationGeneration = location.state?.generation;
    
    const getPokemonData = async () => {
        if(generation == 0){
            setPokemonUrlList([{ name: "", url :`https://pokeapi.co/api/v2/pokemon/${Math.round(Math.random() * totalPokemonCount) + 1}`}]);
            return;
        }   
    
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${getPokemonQuantityByGeneration(generation)}&offset=${getOffset(generation)}`);
        setPokemonUrlList(res.data.results);
    }

    const getOffset = (generation : number) => {
      switch (generation) {
          case 1:
              return 0;
          
          case 2:
              return 151;
          
          case 3:
              return 251;
          
          case 4:
              return 386;
  
          case 5:
              return 493;
  
          case 6:
              return 649;
          
          case 7:
              return 721;
          
          case 8:
              return 809;
          
          case 9:
              return 905;
  
          default:
              return 0;
      }
    }

    const getPokemonQuantityByGeneration = (generation : number) => {
        switch (generation) {
            case 1:
                return 151;

            case 2:
                return 100;

            case 3:
                return 135;

            case 4:
                return 107;

            case 5:
                return 156;

            case 6:
                return 72;

            case 7:
                return 88;

            case 8:
                return 96;

            case 9:
                return 105;

            default:
                return 0;
        }
    }

    const previousGeneration = () => {
      if(generation == 0) return;
      setGeneration(generation - 1);
    }

    const nextGeneration = () => {
      if(generation == 9) return;
      setGeneration(generation + 1);
    }

    const handleScroll = () => {
        if(window.pageYOffset >= 20) {
          setScrolled(true)
        } else {
          setScrolled(false)
        }
    }

    useEffect(() => { 
        getPokemonData();
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [generation])

    return (
        <div>
            <PokedexHeader></PokedexHeader>
            <div className='cardListBody'>
                <div className={`searchFilter ${scrolled ? 'searchFilter-scrolled' : ""}`}>
                    <button 
                      onClick={previousGeneration} 
                      className={`leftSearchButton genButtonSearch search ${scrolled ? 'search-scrolled' : ""}`}>{"<"}</button>
                    <select 
                      value={generation} 
                      onChange={(x) => setGeneration(parseInt(x.target.value))}
                      className={`generationSelect ${scrolled ? 'generationSelect-scrolled' : ""}`}>
                        <option value={0}>Selecione uma geração</option>
                        <option value={1}>Geração 1 - Kanto</option>
                        <option value={2}>Geração 2 - Johto</option>
                        <option value={3}>Geração 3 - Hoenn</option>
                        <option value={4}>Geração 4 - Sinnoh</option>
                        <option value={5}>Geração 5 - Unova</option>
                        <option value={6}>Geração 6 - Kalos</option>
                        <option value={7}>Geração 7 - Alola</option>
                        <option value={8}>Geração 8 - Galar</option>
                        <option value={9}>Geração 9 - Paldea</option>
                    </select>
                    <button 
                      onClick={nextGeneration}
                      className={`rightSearchButton genButtonSearch search ${scrolled ? 'search-scrolled' : ""}`}>{">"}</button>
                </div>
                <div className='CardListContainer'>
                  <button 
                      onClick={previousGeneration} 
                      className='leftButton genButton'>{"<"}</button>
                  <PokemonCardList PokemonUrlList={pokemonUrlList}></PokemonCardList>
                  <button 
                      onClick={nextGeneration}
                      className='rightButton genButton'>{">"}</button>
                </div>
            </div>
            <PokedexFooter isGenZero={false}></PokedexFooter>
        </div>    
    );
}