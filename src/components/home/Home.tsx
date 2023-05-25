import { Leaderboard } from "./Leaderboard";
import { Card, Container } from "react-bootstrap";
import games from "../../assets/partite.jpg"
import teams from "../../assets/squadre.jpeg"
import players from "../../assets/giocatori.jpeg"
import bg from "../../assets/bg_index.jpg"
import { Link } from "react-router-dom";
import Header from "../../Header";

export const Home = () => {
    return (
        <>
        <Header bgImage={bg} title="Dashboard" />

        <Container>
            <Container className="navCards">
                <div className="row">
                    <div className="col-md-6 col-lg-4" >
                        <div className="col mb-4 ml-2 mr-2">
                            <Link to="/team">
                                <Card style={{ width: '23rem', border: "none"}}>
                                    <Card.Img variant="top" src={teams} />
                                </Card>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4" >
                        <div className="col mb-4 ml-2 mr-2">
                            <Link to="/calendar">
                                <Card style={{ width: '23rem', border: "none"}}>
                                    <Card.Img variant="top" src={games} />
                                </Card>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4" >
                        <div className="col mb-4 ml-2 mr-2">
                            <Link to="/player">
                                <Card style={{ width: '23rem', border: "none"}}>
                                    <Card.Img variant="top" src={players} />
                                </Card>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>

            <p>CLASSIFICA</p>
            <Leaderboard />
        </Container>
        </>
    )
}