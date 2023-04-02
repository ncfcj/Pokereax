import "./style/pokedexHeader.css"
interface IPokedexHeader {

}

export const PokedexHeader = (props : IPokedexHeader) => {
    return (
        <div className="headerDiv">
            <div className="header"></div>
            <div className="navbar"></div>
        </div>
    )
}