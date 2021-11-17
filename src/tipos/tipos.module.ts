import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TiposSchema } from './schemas/tipos.schema';
import { TiposController } from './tipos.controller';
import { TiposService } from './tipos.service';
import { Mongoose } from 'mongoose';

@Module({
  imports:[
    
    MongooseModule.forFeature([
      {name:'tipos', schema: TiposSchema}
    ])
  ],

  controllers: [TiposController],
  providers: [TiposService]
})
export class TiposModule {}
