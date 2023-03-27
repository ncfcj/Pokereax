import IPokemonUrl from "./IPokemonUrl";
import IPokemonVersionGroupDetails from "./IPokemonVersionGroupDetails";

interface IPokemonMove {
    move : IPokemonUrl,
    version_group_details : IPokemonVersionGroupDetails[]
}

export default IPokemonMove;