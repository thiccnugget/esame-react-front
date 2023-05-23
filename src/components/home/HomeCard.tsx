import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const HomeCard = (props:{img:string}) => {
    return(
        <Link to="/teams">
            <Card style={{ width: '23rem', border: "none"}}>
                <Card.Img variant="top" src={props.img} />
            </Card>
        </Link>
    )
}