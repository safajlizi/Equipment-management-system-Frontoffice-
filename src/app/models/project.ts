import {User} from "./user"

export interface  Project{
    id : number
    projectname : string
    department: string
    name : string
    email : string
    members : User[]
}
