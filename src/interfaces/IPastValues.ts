import { IEffectEntries } from "./IEffectEntries";
import IPokemonUrl from "./IPokemonUrl";

export interface IPastValues {
    accuracy? : number,
    effect_chance? : number,
    effect_entries? : IEffectEntries[],
    power? : number,
    pp? : number,
    type? : IPokemonUrl,
    version_group? : IPokemonUrl,
}