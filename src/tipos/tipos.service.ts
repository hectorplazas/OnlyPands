import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Itipos } from './interface/tipos.interface';
import { CreateTiposDTO } from './dto/create_tipos.dto';

@Injectable()
export class TiposService {

    constructor (@InjectModel('tipos') private readonly tiposModel : Model<Itipos>){}

    async getTipos():Promise<Itipos[]> {
        const tipos = await this.tiposModel.find();
        return tipos;
    }

    async createTipos(CreateTiposDTO:CreateTiposDTO):Promise<Itipos>{
        const tipos = new this.tiposModel(CreateTiposDTO);
        await tipos.save(); 
        return tipos;
    }

    async getTiposbyID(tiposId : string):Promise<Itipos> {
        const tipos = await this.tiposModel.findById(tiposId);
        return tipos;
    }

    async updateTiposbyID(tiposId : String, CreateTiposDTO: CreateTiposDTO):Promise<Itipos> {
        const updateTipos = await this.tiposModel.findByIdAndUpdate(tiposId, CreateTiposDTO, {new:true});
        return updateTipos; 
    }

    async deleteTiposbyID(tiposId : string):Promise<Itipos> {
        const deleteTipos = await this.tiposModel.findByIdAndDelete(tiposId);
        return deleteTipos; 
    }




 


}

