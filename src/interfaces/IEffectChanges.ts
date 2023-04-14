import { IEffectEntries } from "./IEffectEntries";
import IPokemonUrl from "./IPokemonUrl";

export interface IEffectChanges {
    effect_entries? : IEffectEntries[],
    version_group? : IPokemonUrl
}