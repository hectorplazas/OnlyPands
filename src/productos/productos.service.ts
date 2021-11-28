import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Iproductos } from './interfaces/productos.interface';
import { CreateProductosDTO } from './dto/create_productos.dto';

@Injectable()
export class ProductosService {

    constructor(@InjectModel('productos')private readonly productosModel:Model<Iproductos>){}

    async getProductos():Promise<Iproductos[]> {
        const productos = await this.productosModel.find();
        return productos
    }

    async createProductos(CreateProductosDTO:CreateProductosDTO):Promise<Iproductos>{
        const productos = new this.productosModel(CreateProductosDTO);
        await productos.save(); 
        return productos;
    }

    async getProductosbyID(productoId : number):Promise<Iproductos> {
        const productos = await this.productosModel.findOne({IdProd:productoId});
        return productos;
    }


    async updateProductosbyID(productoId : number, CreateProductosDTO: CreateProductosDTO):Promise<Iproductos> {
        const updateProductos = await this.productosModel.findOneAndUpdate({IdProd:productoId}, CreateProductosDTO,{new:true});
        return updateProductos; 
    }

    async deleteProductosbyID(productoId : number):Promise<Iproductos> {
        const deleteProductos = await this.productosModel.findOneAndDelete({IdProd:productoId});
        return deleteProductos; 
    }






}





