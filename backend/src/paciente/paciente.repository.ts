import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class PacienteRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.PacienteCreateInput) {
    return this.prisma.paciente.create({ data });
  }

  async findAll() {
    return this.prisma.paciente.findMany();
  }

  async findOne(where: Prisma.PacienteWhereUniqueInput) {
    return this.prisma.paciente.findUnique({ where });
  }

  async update(id: string, data: Prisma.PacienteUpdateInput) {
    return this.prisma.paciente.update({ where: { id }, data });
  }

  async remove(id: string) {
    return this.prisma.paciente.delete({ where: { id } });
  }
}
