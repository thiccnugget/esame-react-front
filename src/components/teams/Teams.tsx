import { Container } from "react-bootstrap";
import { TeamCard } from "./TeamCard";
import bg from "../../assets/bg_squadre.jpeg"
import Header from "../../Header";
import useGetData from "../../utils/useGetData";
import { Data } from "../../utils/dataTypes";

const Teams = () => {

    const teams = useGetData<[]>(`http://localhost:3002/v1/team`)

    return(
        <>
        <Header bgImage={bg} title="Squadre" />

        <Container style={{marginTop: "150px", display:"flex", flexDirection: "row", justifyContent: "space-between"}}>
            <div className="row">
                {teams && teams.map((team:Data, index: number) => {
                    return( 
                        <div className="col mb-4" key={index}> 
                            <TeamCard pos={index} {...team} /> 
                        </div> 
                    )
                })}
            </div>
        </Container>
        </>
    )
}

export default Teams