import IPokemonUrl from "./IPokemonUrl";

export interface IEffectEntries {
    effect : string,
    language : IPokemonUrl,
    short_effect? : string
}