import React from "react"
import "./style/pokedexFooter.css"

interface IPokedexFooter {
    isGenZero : boolean,
    margin? : number,
}

export const PokedexFooter = (props : IPokedexFooter) => {
    const footerStyle : React.CSSProperties = {
        position: "absolute",
        bottom: "0",
        height: "16%",
        margin: `${props.margin != undefined ? props.margin : 0}`
    }

    return (
        <div className="footer" style={props.isGenZero ? footerStyle : {} as React.CSSProperties}>
            <div className="footerChild">
                <img className="gitHubIcon" 
                    src="/github-mark-white.svg"></img>
                <a className="linkColor" 
                    href="https://github.com/ncjr1"> Check out my GitHub</a>  
            </div>  
        </div>
    )
}