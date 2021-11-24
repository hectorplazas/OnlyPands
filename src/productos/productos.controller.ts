import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res } from '@nestjs/common';
import { CreateProductosDTO } from './dto/create_productos.dto';
import { ProductosService } from './productos.service';

@Controller('productos')
export class ProductosController {
    constructor(private readonly ProductosService:ProductosService){};

    @Get()
    async getproductoslista(@Res() res){
        const productos = await this.ProductosService.getProductos();

        return res.status(HttpStatus.OK).send(productos);

    }
     
    @Post('create')
    async createNewproductos(@Res() res, @Body () CreateProductosDTO:CreateProductosDTO ){

        const productos = await this.ProductosService.createProductos(CreateProductosDTO);

        return res.status(HttpStatus.CREATED).send(productos);

    }

    @Get('/:productosId')
    async getproductosById(@Res() res, @Param('productosId')id){
        const productos = await this.ProductosService.getProductosbyID(id);

        if(!productos){
            throw new NotFoundException ('El producto no existe');
        }
        return res.status(HttpStatus.OK).send(productos);
    }

    //Patch se usa cuando quiero actualzar un campo del obdjeto y el put cunado quiero cambiar todos los cambios

    @Put('update/:productosId')
    async updateProductos(@Res() res, @Body() CreateProductosDTO : CreateProductosDTO, @Param('productosId') id){
        const updateProductos = await this.ProductosService.updateProductosbyID(id, CreateProductosDTO);

        if(!updateProductos){
            throw new NotFoundException ('El producto no existe');
        }
        return res.status(HttpStatus.OK).send(updateProductos);
    }

    @Delete('/delete')
    async deleteProductos(@Res() res, @Query('productoId')id){
        const delProductos = await this.ProductosService.deleteProductosbyID(id);

        if(!delProductos){
            throw new NotFoundException ('El producto no existe, confirme el ID');
        }
        return res.status(HttpStatus.OK).send(delProductos);


    }










}
