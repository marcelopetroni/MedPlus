import { Module } from '@nestjs/common';
import { ConsultaService } from './consulta.service';
import { ConsultaController } from './consulta.controller';
import { ConsultaRepository } from './consulta.repository';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [ConsultaController],
  providers: [ConsultaService, ConsultaRepository, PrismaService],
})
export class ConsultaModule {}
