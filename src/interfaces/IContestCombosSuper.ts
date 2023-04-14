import IPokemonUrl from "./IPokemonUrl";

export interface IContestCombosSuper {
    use_after : IPokemonUrl[],
    use_before : IPokemonUrl[]
}