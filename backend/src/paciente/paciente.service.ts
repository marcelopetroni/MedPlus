import { Injectable } from '@nestjs/common';
import { PacienteRepository } from './paciente.repository';
import { CreatePacienteDto, UpdatePacienteDto } from './paciente.dto';

@Injectable()
export class PacienteService {
  constructor(private pacienteRepository: PacienteRepository) {}

  async createPaciente(data: CreatePacienteDto) {
    const pacienteData = {
      ...data,
      dataNascimento: new Date(data.dataNascimento).toISOString()
    }

    return this.pacienteRepository.create(pacienteData);
  }

  async getPacientes() {
    return this.pacienteRepository.findAll();
  }

  async getPacienteById(id: string) {
    return this.pacienteRepository.findOne({ id });
  }

  async updatePaciente(id: string, data: UpdatePacienteDto) {

    const pacienteData = {
      ...data,
      dataNascimento: new Date(data.dataNascimento).toISOString()
    }

    return this.pacienteRepository.update(id, pacienteData);
  }

  async deletePaciente(id: string) {
    return this.pacienteRepository.remove(id);
  }
}
