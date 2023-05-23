import React from "react"
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom";

const Footer = () => {
    const d = new Date();
    const year = d.getFullYear();
    return(
        <Container style={{marginTop:"100px"}}>
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">Home</Link></li>
                <li className="nav-item"><Link to="/team" className="nav-link px-2 text-muted">Squadre</Link></li>
                <li className="nav-item"><Link to="/player" className="nav-link px-2 text-muted">Giocatori</Link></li>
                <li className="nav-item"><Link to="/calendar" className="nav-link px-2 text-muted">Calendario</Link></li>
                <li className="nav-item"><Link to="/sponsor" className="nav-link px-2 text-muted">Sponsor</Link></li>
                </ul>
                <p className="text-center text-muted">© {year} Samuele Cammarata</p>
            </footer>
        </Container>
    )
}

export default Footer