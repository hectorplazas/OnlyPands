import { Schema } from 'mongoose';

export const TiposSchema = new Schema({
    IdTipo: {type : Number, required : true},
    nombreTipo: {type : String, required : true}

})