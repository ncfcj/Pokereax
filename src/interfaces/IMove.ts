import { IContestCombos } from "./IContestCombos";
import { IContestEffect } from "./IContestEffect";
import { IEffectChanges } from "./IEffectChanges";
import { IEffectEntries } from "./IEffectEntries";
import { IMachine } from "./IMachine";
import { IMeta } from "./IMeta";
import { IPastValues } from "./IPastValues";
import { IPokemonFlavorText } from "./IPokemonFlavorText";
import { IPokemonNames } from "./IPokemonNames";
import IPokemonUrl from "./IPokemonUrl";
import { IStatChanges } from "./IStatChanges";

export interface IMove {
    accuracy?: number,
    contest_combos? : IContestCombos,
    contest_effect? : IContestEffect,
    contest_type? : IPokemonUrl,
    damage_class? : IPokemonUrl,
    effect_chance? : number,
    effect_changes? : IEffectChanges[],
    effect_entries? : IEffectEntries[],
    flavor_text_entries? : IPokemonFlavorText[],
    generation? : IPokemonUrl,
    id? : number,
    learned_by_pokemon? : IPokemonUrl[],
    machines? : IMachine[],
    meta? : IMeta,
    name? : string,
    names? : IPokemonNames[],
    past_values? : IPastValues,
    power? : number,
    pp? : number,
    priority? : number,
    stat_changes? : IStatChanges[],
    super_contest_effect? : { url : string },
    target? : IPokemonUrl,
    type? : IPokemonUrl
}