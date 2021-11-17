import { Schema } from 'mongoose';

export const ProductosSchema = new Schema ({

    IdProd: {type :Number, required : true}, 
    nombreProd: {type : String, required:true}, 
    claseProd: {type : String, required : false},
    valor: {type :Number, required : true}

});
