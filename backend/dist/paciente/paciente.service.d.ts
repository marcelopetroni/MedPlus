import { PacienteRepository } from './paciente.repository';
import { CreatePacienteDto, UpdatePacienteDto } from './paciente.dto';
export declare class PacienteService {
    private pacienteRepository;
    constructor(pacienteRepository: PacienteRepository);
    createPaciente(data: CreatePacienteDto): Promise<{
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
    getPacientes(): Promise<{
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
    getPacienteById(id: string): Promise<{
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
    updatePaciente(id: string, data: UpdatePacienteDto): Promise<{
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
    deletePaciente(id: string): Promise<{
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
