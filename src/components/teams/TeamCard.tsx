import { Card } from "react-bootstrap"
import "./teamCard.css"
import gold from "../../assets/gold.jpeg"
import silver from "../../assets/silver.jpeg"
import bronze from "../../assets/bronze.jpeg"
import { Link } from "react-router-dom"

export const TeamCard = (props: { pos: number, img: string; name: String; location: String; _id: String } ) =>{
    const {img,name,location, pos, _id} = props;
    return(
        <Link to={`/team/${_id}`}>
            <Card style={{ width: '18rem', borderRadius:10}}>
            <Card.Img src={img} alt="logo" variant="top"/>
                <Card.Body>
                    <Card.Img src={pos===8 ? gold : pos===7 ? silver : pos ===3 ? bronze : ""} alt="" variant="top" className="position" />
                    <Card.Title className="text-center text-black mt-3">{name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-center text-muted">{location}</Card.Subtitle>
                    <Card.Subtitle className="text-black text-center">Posizione: </Card.Subtitle>
                </Card.Body>
            </Card>
        </Link>
    )
}