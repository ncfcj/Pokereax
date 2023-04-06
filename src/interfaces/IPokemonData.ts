import IPokemonAbilities from "./IPokemonAbilities";
import IPokemonGameIndex from "./IPokemonGameIndex";
import IPokemonHeldItems from "./IPokemonHeldItems";
import IPokemonMove from "./IPokemonMove";
import IPokemonSpecies from "./IPokemonSpecies"
import IPokemonSprites from "./IPokemonSprites";
import IPokemonStats from "./IPokemonStats";
import IPokemonType from "./IPokemonType";
import IPokemonUrl from "./IPokemonUrl";


interface IPokemonData {
    abilities: IPokemonAbilities[],
    base_experience: number,
    forms: IPokemonUrl[],
    game_indices: IPokemonGameIndex[],
    height : number,
    held_items : IPokemonHeldItems[],
    id: number,
    is_default : boolean,
    location_area_encounters: string,
    moves : IPokemonMove[],
    name: string,
    order: number,
    past_types: any[],
    species: IPokemonUrl,
    sprites: IPokemonSprites,
    stats : IPokemonStats[],
    types : IPokemonType[],
    other : any,
    versions : any
}

export default IPokemonData;