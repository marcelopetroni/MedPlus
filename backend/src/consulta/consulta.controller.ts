import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ConsultaService } from './consulta.service';
import { CreateConsultaDto, UpdateConsultaDto } from './consulta.dto';

@ApiTags('consulta')
@Controller('consulta')
export class ConsultaController {
  constructor(private consultaService: ConsultaService) {}

  @Post()
  async createConsulta(@Body() consultaData: CreateConsultaDto) {
    return this.consultaService.createConsulta(consultaData);
  }

  @Get()
  async getConsultas() {
    return this.consultaService.getConsultas();
  }

  @Get(':id')
  async getConsultaById(@Param('id') id: string) {
    return this.consultaService.getConsultaById(id);
  }

  @Put(':id')
  async updateConsulta(@Param('id') id: string, @Body() consultaData: UpdateConsultaDto) {
    return this.consultaService.updateConsulta(id, consultaData);
  }

  @Delete(':id')
  async deleteConsulta(@Param('id') id: string) {
    return this.consultaService.deleteConsulta(id);
  }
}
