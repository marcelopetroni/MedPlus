import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class PacienteRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.PacienteCreateInput): Promise<{
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
    }>;
    findAll(): Promise<{
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
    }[]>;
    findOne(where: Prisma.PacienteWhereUniqueInput): Promise<{
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
    }>;
    update(id: string, data: Prisma.PacienteUpdateInput): Promise<{
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
    }>;
    remove(id: string): Promise<{
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
    }>;
}
