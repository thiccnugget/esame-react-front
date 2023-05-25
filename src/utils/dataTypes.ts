export interface PlayerInt  {
    id: String,
    name: String,
    surname: String,
    img?: string,
    wins?: number, 
    draws?: number, 
    losses?: number, 
    legWins?: number, 
    legLosses?: number,
    bestCheckout?: number,
    bestLeg?:number,
    one80?: number,
    average?: number
}

export interface Data {
    _id: String,
    name: String
    location: String,
    img: string,
    players: PlayerInt[]
}
