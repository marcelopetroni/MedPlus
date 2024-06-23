import { Injectable } from '@nestjs/common';
import { ConsultaRepository } from './consulta.repository';
import { CreateConsultaDto, UpdateConsultaDto } from './consulta.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class ConsultaService {
  constructor(private consultaRepository: ConsultaRepository) {}

  async createConsulta(data: CreateConsultaDto) {
    const consultaData: Prisma.ConsultaCreateInput = {
      paciente: {
        connect: { id: data.pacienteId },
      },
      nomePaciente: data.nomePaciente,
      especialidade: data.especialidade,
      local: data.local,
      data: new Date(data.data).toISOString()
    };
    return this.consultaRepository.create(consultaData);
  }

  async getConsultas() {
    return this.consultaRepository.findAll();
  }

  async getConsultaById(id: string) {
    return this.consultaRepository.findOne({ id });
  }

  async updateConsulta(id: string, data: UpdateConsultaDto) {
    const consultaData: Prisma.ConsultaUpdateInput = {
      paciente: {
        connect: { id: data.pacienteId },
      },
      nomePaciente: data.nomePaciente,
      especialidade: data.especialidade,
      local: data.local,
      data: new Date(data.data).toISOString(),
    };
    return this.consultaRepository.update(id, consultaData);
  }

  async deleteConsulta(id: string) {
    return this.consultaRepository.remove({id});
  }
}
