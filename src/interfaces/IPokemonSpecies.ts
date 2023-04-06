import { IPokemonEvolutionChain } from "./IPokemonEvolutionChain";
import { IPokemonFlavorText } from "./IPokemonFlavorText";
import { IPokemonGenera } from "./IPokemonGenera";
import { IPokemonNames } from "./IPokemonNames";
import { IPokemonPalParkEncounters } from "./IPokemonPalParkEncounters";
import { IPokemonPokedexNumbers } from "./IPokemonPokedexNumbers";
import IPokemonUrl from "./IPokemonUrl";
import { IPokemonVarieties } from "./IPokemonVarieties";

interface IPokemonSpecies{
    base_happiness : number,
    capture_rate: number,
    color : IPokemonUrl,
    egg_groups: IPokemonUrl[],
    evolution_chain: IPokemonEvolutionChain,
    evolves_from_species: IPokemonUrl,
    flavor_text_entries: IPokemonFlavorText[],
    form_descriptions: unknown[],
    forms_switchable: boolean,
    gender_rate: number,
    genera: IPokemonGenera[],
    generation: IPokemonUrl,
    growth_rate: IPokemonUrl,
    habitat: IPokemonUrl,
    has_gender_differences: boolean,
    hatch_counter: number,
    id: number,
    is_baby: boolean,
    is_legendary: boolean,
    is_mythical: boolean,
    name: string,
    names: IPokemonNames[],
    order: number,
    pal_park_encounters: IPokemonPalParkEncounters[],
    pokedex_numbers: IPokemonPokedexNumbers[],
    shape: IPokemonUrl,
    varieties: IPokemonVarieties[]
}

export default IPokemonSpecies;