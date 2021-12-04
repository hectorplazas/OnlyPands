import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductosModule } from './productos/productos.module';
import { TiposModule } from './tipos/tipos.module';



@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:1.esDios@cluster0.ejijx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useNewUrlParser: true
  
  }),
    ProductosModule,
    TiposModule
  ],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
