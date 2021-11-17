import { Document } from "mongoose";

export interface Itipos extends Document{
    
    readonly IdTipo:number; 
    readonly nombreTipo:string;
}

