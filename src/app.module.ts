import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductosModule } from './productos/productos.module';
import { TiposModule } from './tipos/tipos.module';



@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://only:only@cluster0.ecvtp.mongodb.net/onlypans',{useNewUrlParser: true
  
  }),
    ProductosModule,
    TiposModule
  ],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
