import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res } from '@nestjs/common';
import { TiposService } from './tipos.service';
import { CreateTiposDTO } from './dto/create_tipos.dto';

@Controller('tipos')
export class TiposController {
    constructor(private readonly TiposService:TiposService){};
    
    @Get()
    async getTiposlista(@Res() res){
        const tipos = await this.TiposService.getTipos();

        return res.status(HttpStatus.OK).json({
            message : 'Tipos Listados',
            data : tipos

        });

    }

    
    @Post('create')
    async createNewtipos(@Res() res, @Body () CreateTiposDTO:CreateTiposDTO ){

        const tipos = await this.TiposService.createTipos(CreateTiposDTO);

        return res.status(HttpStatus.CREATED).json({
            message : 'tipo Creado',
            data : tipos
        });

    }

    @Get('/:tipoId')
    async gettiposById(@Res() res, @Param('tipoId')id){
        const tipos = await this.TiposService.getTiposbyID(id);                  

        if(!tipos){
            throw new NotFoundException ('El tipo no existe');
        }
        return res.status(HttpStatus.OK).json({
            message : 'Tipo Encontrado',
            data : tipos
        });
    }

    @Put('update/:tiposId')
    async updateTipos(@Res() res, @Body() CreateTiposDTO : CreateTiposDTO, @Param('tiposId') id){
        const updateTipos = await this.TiposService.updateTiposbyID(id, CreateTiposDTO);

        if(!updateTipos){
            throw new NotFoundException ('El tipo no existe');
        }
        return res.status(HttpStatus.OK).json({
            message : 'Tipo actualizado',
            data : updateTipos
        });
    }


    @Delete('/delete')
    async deleteTipos(@Res() res, @Query('tipoId')id){
        const delTipos = await this.TiposService.deleteTiposbyID(id);

        if(!delTipos){
            throw new NotFoundException ('El Tipo no existe, confirme el ID');
        }
        return res.status(HttpStatus.OK).json({
            message : 'Tipo eliminado',
            data : delTipos
        });


    }
















}
