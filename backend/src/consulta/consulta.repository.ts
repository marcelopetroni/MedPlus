import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ConsultaRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.ConsultaCreateInput) {
    return this.prisma.consulta.create({ data });
  }

  async findAll() {
    return this.prisma.consulta.findMany({ include: { paciente: true } });
  }

  async findOne(where: Prisma.ConsultaWhereUniqueInput) {
    return this.prisma.consulta.findUnique({ where, include: { paciente: true } });
  }

  async update(id: string, data: Prisma.ConsultaUpdateInput) {
    const consulta = this.prisma.consulta.update({ where: {id}, data });
    return consulta
  }

  async remove(where: Prisma.ConsultaWhereUniqueInput) {
    const consulta = this.prisma.consulta.delete({ where });
    return consulta;
  }
}
