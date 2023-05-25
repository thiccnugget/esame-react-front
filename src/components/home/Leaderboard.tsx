import React from "react";
import { Table } from "react-bootstrap";

const getColor = (n:number, index: number):string => {
    switch(index){
        case 1:
        case 2:
            return "bg-success";
        
        case 3:
        case 4:
            return "bg-warning";
        
        case n:
            return "bg-danger";

        default:
            return "";
    }
}

export const Leaderboard = () => {

    const data = [{
        team: "dream team",
        points: 100,
        pg: 20,
        w: 20,
        l: 0,
        t: 0,
        lw: 60,
        ll:0,
        ld: 60,
        avg: 95.7
    },{
        team: "dream team",
        points: 100,
        pg: 20,
        w: 20,
        l: 0,
        t: 0,
        lw: 60,
        ll:0,
        ld: 60,
        avg: 95.7
    },{
        team: "dream team",
        points: 100,
        pg: 20,
        w: 20,
        l: 0,
        t: 0,
        lw: 60,
        ll:0,
        ld: 60,
        avg: 95.7
    },{
        team: "dream team",
        points: 100,
        pg: 20,
        w: 20,
        l: 0,
        t: 0,
        lw: 60,
        ll:0,
        ld: 60,
        avg: 95.7
    },{
        team: "dream team",
        points: 100,
        pg: 20,
        w: 20,
        l: 0,
        t: 0,
        lw: 60,
        ll:0,
        ld: 60,
        avg: 95.7
    },{
        team: "dream team",
        points: 100,
        pg: 20,
        w: 20,
        l: 0,
        t: 0,
        lw: 60,
        ll:0,
        ld: 60,
        avg: 95.7
    },{
        team: "dream team",
        points: 100,
        pg: 20,
        w: 20,
        l: 0,
        t: 0,
        lw: 60,
        ll:0,
        ld: 60,
        avg: 95.7
    },{
        team: "dream team",
        points: 100,
        pg: 20,
        w: 20,
        l: 0,
        t: 0,
        lw: 60,
        ll:0,
        ld: 60,
        avg: 95.7
    },{
        team: "dream team",
        points: 100,
        pg: 20,
        w: 20,
        l: 0,
        t: 0,
        lw: 60,
        ll:0,
        ld: 60,
        avg: 95.7
    }]

    return(
        <Table>
            <thead>
                <tr className="bg-dark navlink">
                <th>POS</th>
                <th>SQUADRA</th>
                <th>PUNTI</th>
                <th>PG</th>
                <th>V</th>
                <th>P</th>
                <th>S</th>
                <th>LV</th>
                <th>LP</th>
                <th>DL</th>
                <th>AVG</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => {
                    return(
                        <tr className={getColor(data.length, index+1)}>
                            <td>{index+1}</td>
                            <td>{row.team}</td>
                            <td>{row.points}</td>
                            <td>{row.pg}</td>
                            <td>{row.w}</td>
                            <td>{row.t}</td>
                            <td>{row.l}</td>
                            <td>{row.lw}</td>
                            <td>{row.ll}</td>
                            <td>{row.ld}</td>
                            <td>{row.avg}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )

}