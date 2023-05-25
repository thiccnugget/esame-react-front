import { Container } from "react-bootstrap";
import bg from "../../assets/bg_giocatori.jpeg"
import { Data, PlayerInt } from "../../utils/dataTypes";
import { PlayerCard } from "./PlayerCard";
import Header from "../../Header";
import useGetData from "../../utils/useGetData";

const Players = () => {

    const teams = useGetData<[]>(`http://localhost:3002/v1/team`)
    interface Player extends PlayerInt{
        teamName?:String;
    }

    return(
        <>
        <Header bgImage={bg} title="Giocatori" />

        <Container style={{marginTop: "100px", display:"flex", flexDirection: "row", justifyContent: "space-between"}}>
            <div className="row">
                {teams && teams.map((team:Data, index: number) => {
                    return(
                        team.players.map((player:Player)=>{
                            player.teamName = team.name
                            return( 
                                <div className="col mb-4" key={index} > 
                                    <PlayerCard {...player} />
                                </div> 
                            )
                        })       
                    )             
                })}
            </div>
        </Container>


        </>
    )
}

export default Players