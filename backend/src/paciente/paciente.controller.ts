import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PacienteService } from './paciente.service';
import { CreatePacienteDto, UpdatePacienteDto } from './paciente.dto';

@ApiTags('paciente')
@Controller('paciente')
export class PacienteController {
  constructor(private pacienteService: PacienteService) {}

  @Post()
  async createPaciente(@Body() pacienteData: CreatePacienteDto) {
    return this.pacienteService.createPaciente(pacienteData);
  }

  @Get()
  async getPacientes() {
    return this.pacienteService.getPacientes();
  }

  @Get(':id')
  async getPacienteById(@Param('id') id: string) {
    return this.pacienteService.getPacienteById(id);
  }

  @Put(':id')
  async updatePaciente(@Param('id') id: string, @Body() pacienteData: UpdatePacienteDto) {
    return this.pacienteService.updatePaciente(id, pacienteData);
  }

  @Delete(':id')
  async deletePaciente(@Param('id') id: string) {
    return this.pacienteService.deletePaciente(id);
  }
}
