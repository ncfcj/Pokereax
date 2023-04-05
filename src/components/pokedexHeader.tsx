import { useEffect, useState } from "react"
import "./style/pokedexHeader.css"

export const PokedexHeader = () => {
    const [isScrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        if(window.pageYOffset > 80) {
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
        <div className={`headerDiv`}>
            <div className={`header ${isScrolled ? 'header-scrolled' : ""}`}>
                <h1 className="headerTitle">PokeReax</h1>
            </div>
            <div className="navbar"></div>
        </div>
    )
}