import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class ConsultaRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.ConsultaCreateInput): Promise<{
        id: string;
        pacienteId: string;
        nomePaciente: string;
        especialidade: string;
        local: string;
        data: Date;
    }>;
    findAll(): Promise<({
        paciente: {
            id: string;
            nome: string;
            cpf: string;
            dataNascimento: Date;
            rg: string;
            endereco: string;
            cep: string;
            numero: string;
            email: string;
            cidade: string;
            estado: string;
            genero: string;
            senha: string;
        };
    } & {
        id: string;
        pacienteId: string;
        nomePaciente: string;
        especialidade: string;
        local: string;
        data: Date;
    })[]>;
    findOne(where: Prisma.ConsultaWhereUniqueInput): Promise<{
        paciente: {
            id: string;
            nome: string;
            cpf: string;
            dataNascimento: Date;
            rg: string;
            endereco: string;
            cep: string;
            numero: string;
            email: string;
            cidade: string;
            estado: string;
            genero: string;
            senha: string;
        };
    } & {
        id: string;
        pacienteId: string;
        nomePaciente: string;
        especialidade: string;
        local: string;
        data: Date;
    }>;
    update(id: string, data: Prisma.ConsultaUpdateInput): Promise<{
        id: string;
        pacienteId: string;
        nomePaciente: string;
        especialidade: string;
        local: string;
        data: Date;
    }>;
    remove(where: Prisma.ConsultaWhereUniqueInput): Promise<{
        id: string;
        pacienteId: string;
        nomePaciente: string;
        especialidade: string;
        local: string;
        data: Date;
    }>;
}
