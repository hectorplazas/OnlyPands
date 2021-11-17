import { Document } from 'mongoose';


export interface Iproductos extends Document{
    
    readonly IdProd:number;
    readonly nombreProd:string;
    readonly claseProd:string;
    readonly valor:number;
}