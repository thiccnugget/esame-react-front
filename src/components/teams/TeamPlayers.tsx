import { Container, Table } from "react-bootstrap";
import bg from "../../assets/bg_squadre.jpeg"
import { PlayerCard } from "../players/PlayerCard";
import useTeam from "../../utils/useTeam";
import { PlayerInt } from "../../utils/dataTypes";
import Header from "../../Header";



export const TeamPlayers = () => {

    const data = useTeam()

    return(
        <>
        <Header bgImage={bg} title="Squadre" />

        <Container style={{marginTop: "100px"}}>
            <p style={{textAlign:"center"}}>Statistiche</p>
            <Table>
                <thead>
                    <tr className="bg-dark navlink">
                    <th>POS</th>
                    <th>PUNTI</th>
                    <th>PG</th>
                    <th>V</th>
                    <th>P</th>
                    <th>S</th>
                    <th>LV</th>
                    <th>LP</th>
                    <th>AVG</th>
                    </tr>
                </thead>
                <tbody>
                    <td>posizione</td>
                    <td>{data.points}</td>
                    <td>{data.played}</td>
                    <td>{data.wins}</td>
                    <td>{data.draws}</td>
                    <td>{data.losses}</td>
                    <td>{data.legWins}</td>
                    <td>{data.legLosses}</td>
                    <td>{data.avg}</td>
                </tbody>
            </Table>
        </Container>
        
        
        <Container style={{marginTop: "100px", display:"flex", flexDirection: "row", justifyContent: "space-between"}}>
            <div className="row">
                {data.teams && data.teams["players"].map((player:PlayerInt, index: number) => {
                    return( <div className="col mb-4" key={index}> <PlayerCard  img={player.img ? player.img : ""} name={player.name} surname={player.surname} id={player.id}  /> </div> )
                })}
            </div>
        </Container>
        </>
    )
}

