import { PacienteService } from './paciente.service';
import { CreatePacienteDto, UpdatePacienteDto } from './paciente.dto';
export declare class PacienteController {
    private pacienteService;
    constructor(pacienteService: PacienteService);
    createPaciente(pacienteData: CreatePacienteDto): Promise<{
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
        genero: string;
        senha: string;
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
        genero: string;
        senha: string;
    }>;
    updatePaciente(id: string, pacienteData: UpdatePacienteDto): Promise<{
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
        genero: string;
        senha: string;
    }>;
}