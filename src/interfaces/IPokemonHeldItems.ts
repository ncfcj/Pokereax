import IPokemonUrl from "./IPokemonUrl";
import IPokemonVersionDetails from "./IPokemonVersionDetails";

interface IPokemonHeldItems {
    item : IPokemonUrl,
    version_details : IPokemonVersionDetails[]
}

export default IPokemonHeldItems;