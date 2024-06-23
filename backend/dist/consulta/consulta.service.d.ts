import { ConsultaRepository } from './consulta.repository';
import { CreateConsultaDto, UpdateConsultaDto } from './consulta.dto';
export declare class ConsultaService {
    private consultaRepository;
    constructor(consultaRepository: ConsultaRepository);
    createConsulta(data: CreateConsultaDto): Promise<{
        id: string;
        pacienteId: string;
        nomePaciente: string;
        especialidade: string;
        local: string;
        data: Date;
    }>;
    getConsultas(): Promise<({
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
    getConsultaById(id: string): Promise<{
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
    updateConsulta(id: string, data: UpdateConsultaDto): Promise<{
        id: string;
        pacienteId: string;
        nomePaciente: string;
        especialidade: string;
        local: string;
        data: Date;
    }>;
    deleteConsulta(id: string): Promise<{
        id: string;
        pacienteId: string;
        nomePaciente: string;
        especialidade: string;
        local: string;
        data: Date;
    }>;
}
