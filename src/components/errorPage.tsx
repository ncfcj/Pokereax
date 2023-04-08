import { Link } from "react-router-dom"
import "./style/errorPage.css"

export const ErrorPage = () => {
    return(
    <div className="container">
        <div className="siteBody">
            <div className="error">
                <h1>Opa! Página não encontrada</h1>
                <Link to={"/"}>
                    <button className="returnButton">Voltar para a página inicial</button>
                </Link>
            </div>
        </div>
    </div>
    )
}   