import "./style/pokedexFooter.css"

interface IPokedexFooter {
    isGenZero : boolean
}

export const PokedexFooter = (props : IPokedexFooter) => {
    const footerStyle : React.CSSProperties = {
        position: "absolute",
        bottom: "0"
    }

    return (
        <div className="footer" style={props.isGenZero ? footerStyle : {} as React.CSSProperties}>
        </div>
    )
}