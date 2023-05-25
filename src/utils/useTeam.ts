import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Data, PlayerInt } from "./dataTypes";

function useTeam() : {
    id:string|undefined, 
    teams:Data|undefined, 
    points:number, 
    played:number, 
    wins:number, 
    draws:number, 
    losses:number, 
    legWins:number, 
    legLosses:number, 
    avg:number
}  //oggetto di ritorno

{

    //id della squadra selezionata, presente in url params
    const {id} = useParams()

    async function getTeams() {
        try{
            const res = await axios.get(`http://localhost:3002/v1/team/${id}`);
            setTeams(res.data);
        } catch(e){
            console.log(e)
        }
    }

    const [teams, setTeams] = useState<Data|undefined>();

    useEffect(() => {
        getTeams();
    }, []); 

    //punti (vittorie: 3 punti + pareggi: 1 punto)
    const points = teams ?  teams["players"].reduce((acc: number, player:PlayerInt)=>{
        if(player.wins){
            acc += player.wins*3;
        }
        if(player.draws){
            acc += player.draws;
        }
        return acc
    }, 0) : 0

    //partite giocate (vittorie + sconfitte + pareggi)
    const played = teams ?  teams["players"].reduce((acc: number, player:PlayerInt)=>{
        if(player.wins){
            acc += player.wins;
        }
        if(player.draws){
            acc += player.draws;
        }
        if(player.losses){
            acc += player.losses;
        }
        return acc
    }, 0) : 0


    //vittorie
    const wins = teams ?  teams["players"].reduce((acc: number, player:PlayerInt)=>{
        if(player.wins){
            acc += player.wins;
        }
        return acc
    }, 0) : 0

    //pareggi
    const draws = teams ?  teams["players"].reduce((acc: number, player:PlayerInt)=>{
        if(player.draws){
            acc += player.draws;
        }
        return acc
    }, 0) : 0

    //sconfitte
    const losses = teams ?  teams["players"].reduce((acc: number, player:PlayerInt)=>{
        if(player.losses){
            acc += player.losses;
        }
        return acc
    }, 0) : 0


    //leg vinti
    const legWins = teams ?  teams["players"].reduce((acc: number, player:PlayerInt)=>{
        if(player.legWins){
            acc += player.legWins;
        }
        return acc
    }, 0) : 0

    //leg persi 
    const legLosses= teams ?  teams["players"].reduce((acc: number, player:PlayerInt)=>{
        if(player.legLosses){
            acc += player.legLosses;
        }
        return acc
    }, 0) : 0

    //average di squadra
    const avg = teams ?  teams["players"].reduce((acc: number, player:PlayerInt)=>{
        if(player.average){
            acc += player.average/teams.players.length;
        }
        return acc
    }, 0) : 0


    return {
        id: id, 
        teams: teams,
        points: points,
        played: played,
        wins: wins, 
        draws: draws, 
        losses: losses, 
        legWins: legWins, 
        legLosses: legLosses, 
        avg: avg
    }

}

export default useTeam