import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongoose } from 'mongoose';
import { ProductosController } from './productos.controller';
import { ProductosService } from './productos.service';
import { ProductosSchema } from './schemas/productos.schema'

@Module({

  imports:[

    MongooseModule.forFeature([
      {name:'productos', schema: ProductosSchema }

    ])

  ],

  controllers: [ProductosController],
  providers: [ProductosService]
})
export class ProductosModule {}
