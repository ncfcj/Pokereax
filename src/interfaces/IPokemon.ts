import IPokemonUrl from "./IPokemonUrl";

export interface IPokemon {
    is_hidden : boolean,
    pokemon : IPokemonUrl,
    slot : number
}