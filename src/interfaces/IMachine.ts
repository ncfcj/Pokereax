import IPokemonUrl from "./IPokemonUrl";

export interface IMachine {
    machine? : { url : string },
    version_group? : IPokemonUrl
}