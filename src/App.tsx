import './App.css'
import { PokemonCardList } from './components/pokemonCardList'
import axios from 'axios';
import { useEffect, useState } from 'react';
import IPokemonUrl from './interfaces/IPokemonUrl';

export const App = () => {
  const [pokemonUrlList, setPokemonUrlList] = useState<IPokemonUrl[]>([] as IPokemonUrl[]); 
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

  useEffect(() => { 
    const getPokemonData = async () => {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0`);
      setPokemonUrlList(res.data.results);
    }
    getPokemonData();
  }, [])

  return (
    <div className="App">
      <PokemonCardList PokemonUrlList={pokemonUrlList}></PokemonCardList>
    </div>
  )
}
