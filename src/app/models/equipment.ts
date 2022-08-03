import {User} from "./user"

export interface Equipment{
    id : number
    label : string
    prop_client : boolean 
    status : boolean
    defaults : string
    description : string
    is_calibrated:boolean
    calibrating_date : Date
    manager : User 

}