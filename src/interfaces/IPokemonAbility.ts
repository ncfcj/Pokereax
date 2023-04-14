import { IEffectEntries } from "./IEffectEntries";
import { IPokemon } from "./IPokemon";
import { IPokemonFlavorText } from "./IPokemonFlavorText";
import { IPokemonNames } from "./IPokemonNames";
import IPokemonUrl from "./IPokemonUrl";

export interface IPokemonAbility {
    effect_changes : any[],
    effect_entries : IEffectEntries[],
    flavor_text_entries : IPokemonFlavorText[],
    generation : IPokemonUrl,
    id : number,
    is_main_series : boolean,
    name: string,
    names : IPokemonNames[],
    pokemon : IPokemon[]
}