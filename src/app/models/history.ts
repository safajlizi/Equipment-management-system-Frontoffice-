import {User} from "./user"
import { Equipment } from "./equipment"
export interface History{
    id : number
    prop_client : boolean //Indicates if this equipment is client sourced or not.
    label : string
    status : boolean
    user : User //The user concerned with said taking.
    equipment : Equipment //The equipment concerned with said taking.
    defaults : string
    date_res : Date
    date_lib : Date
    description : string

}