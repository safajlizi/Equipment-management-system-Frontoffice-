import {Equipment} from "./equipment"
export interface  User{
    id : number
    email : string
    username : string
    password : string
    salt : string // This is saved in database and not sent when exchanging data.
    role : String //Can be ROLE:USER or ROLE:ADMIN at the moment.
    equipment : Equipment[] //One to many with equipment table. The equipment that this user manages at the moment.
}