import './App.css'
import { PokemonCardList } from './components/pokemonCardList'
import axios from 'axios';
import { useEffect, useState } from 'react';
import IPokemonUrl from './interfaces/IPokemonUrl';

export const App = () => {
  const [pokemonUrlList, setPokemonUrlList] = useState<IPokemonUrl[]>([] as IPokemonUrl[]);
  const [generation, setGeneration] = useState<number>(0); 

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

  const getPokemonData = async () => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${getPokemonQuantityByGeneration(generation)}&offset=${getOffset(generation)}`);
    setPokemonUrlList(res.data.results);
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

  useEffect(() => { 
    getPokemonData();
  }, [generation])

  return (
    <div className="App">
      <select onChange={(x) => setGeneration(parseInt(x.target.value))}>
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
      <PokemonCardList PokemonUrlList={pokemonUrlList}></PokemonCardList>
    </div>
  )
}
