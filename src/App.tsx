import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import { PokedexHeader } from './components/pokedexHeader';
import { PokemonBodyGenerationList } from './components/pokemonBodyGenerationList';
import { PokemonDescription } from './components/pokemonDescription';
import { ErrorPage } from './components/errorPage';

export const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <PokemonBodyGenerationList/>,
            errorElement: <ErrorPage />,
        },
        {
            path: "/pokemon/:pokemonName",
            element: <PokemonDescription/>,
            errorElement: <ErrorPage />
        }
      ]);

    return (
        <div className="App">
            <PokedexHeader></PokedexHeader>
            <RouterProvider router={router} />
        </div>
    )
}
