import IPokemonUrl from "./IPokemonUrl";

export interface IMeta {
    ailment? : IPokemonUrl,
    ailment_chance? : number,
    category? : IPokemonUrl,
    crit_rate? : number,
    drain? : number,
    flinch_chance? : number,
    healing? : number,
    max_hits? : number,
    max_turns? : number,
    min_hits? : number,
    min_turns? : number,
    stat_chance? : number,
}