import React from "react";
import { Leaderboard } from "./Leaderboard";
import { HomeCard } from "./HomeCard";
import { Container, Row } from "react-bootstrap";
import games from "../../assets/partite.jpg"
import teams from "../../assets/squadre.jpeg"
import players from "../../assets/giocatori.jpeg"
import bg from "../../assets/bg_index.jpg"
import "./style.css";

export const Home = () => {
    const images = [teams, games, players];
    return (
        <>
        <Container fluid className="site-blocks-cover overlay" style={{backgroundImage: `url(${bg})`}}>
            <Container>
                <div className="row align-items-center justify-content-start">
                    <div className="col-md-6 text-center text-md-left">
                        <h1 className="bg-black" style={{width:"50%", color:"white"}}>Dashboard</h1>
                    </div>
                </div>
            </Container>
        </Container>

        <Container>
            <Container className="navCards">
                <div className="row">
                    {images.map(img=>{
                        return(
                            <div className="col-md-6 col-lg-4" >
                                <HomeCard img={img} />
                            </div>
                        )
                    })}
                </div>
            </Container>

            <p>CLASSIFICA</p>
            <Leaderboard />
        </Container>
        </>
    )
}