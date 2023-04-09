import { useEffect, useState } from "react"
import "./style/pokedexHeader.css"
import { Link } from 'react-router-dom'

export const PokedexHeader = () => {
    const [isScrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        if(window.pageYOffset > 20) {
          setScrolled(true)
        } else {
          setScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])
    
    return (
        <div className={`headerDiv ${isScrolled ? 'headerDiv-scrolled' : ""}`}>
            <div className={`header ${isScrolled ? 'header-scrolled' : ""}`}>
                <Link to={"/"} state={{generation : 0}}>
                    <h1 className="headerTitle">PokeReax</h1>
                </Link>
            </div>
            <div className={`navbar ${isScrolled ? 'navbar-scrolled' : ""}`}></div>
        </div>
    )
}