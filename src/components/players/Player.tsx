import { useParams } from "react-router-dom";
import {PlayerInt} from "../../utils/dataTypes"
import { PlayerCard } from "./PlayerCard";
import useGetData from "../../utils/useGetData";

const Player = () => {
    const {id} = useParams() 
    const player = useGetData<PlayerInt>(`http://localhost:3002/v1/team/player/${id}`)
    
    return(
        (player && <PlayerCard {...player} />) || <div></div>
    )
    
}

export default Player