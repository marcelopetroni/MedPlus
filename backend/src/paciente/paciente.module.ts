import { Module } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { PacienteController } from './paciente.controller';
import { PacienteRepository } from './paciente.repository';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [PacienteController],
  providers: [PacienteService, PacienteRepository, PrismaService],
})
export class PacienteModule {}
