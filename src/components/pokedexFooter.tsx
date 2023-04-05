import { SvgIcon } from "./SvgIcon"
import "./style/pokedexFooter.css"

interface IPokedexFooter {
    isGenZero : boolean
}

export const PokedexFooter = (props : IPokedexFooter) => {
    const footerStyle : React.CSSProperties = {
        position: "absolute",
        bottom: "0"
    }

    const gitHubIconStyle : React.CSSProperties = {
        width: "1rem",
        height: "1rem"
    }

    return (
        <div className="footer" style={props.isGenZero ? footerStyle : {} as React.CSSProperties}>
            <div className="footerChild">
                <h4>
                    <SvgIcon wrapperStyle={gitHubIconStyle} iconPath="/github-mark-white.svg"></SvgIcon>
                    <a className="linkColor" href="https://github.com/ncjr1"> Check out my GitHub</a> 
                </h4>
            </div>
        </div>
    )
}