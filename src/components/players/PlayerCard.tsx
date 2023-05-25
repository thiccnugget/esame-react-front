import { Card } from "react-bootstrap"
import "../teams/teamCard.css"
import { PlayerInt } from "../../utils/dataTypes"
import { Link } from "react-router-dom";

interface Player extends PlayerInt{
    teamName?: String
}

export const PlayerCard = (props:Player) =>{
    const {img,name,surname, id, teamName} = props;
    return(
        <Link to={`/player/${id}`}>
            <Card style={{ width: '18rem', borderRadius:10}}>
                <Card.Img src={img} alt={img} variant="top" />
                <Card.Body>                
                    <Card.Title className="text-center mt-3">{name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-center text-muted">{surname}</Card.Subtitle>
                    {teamName && <Card.Subtitle className="mb-2 text-center text-muted">{teamName}</Card.Subtitle>}
                </Card.Body>
            </Card>
        </Link>
    )
}