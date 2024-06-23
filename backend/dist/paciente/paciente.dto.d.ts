export declare class CreatePacienteDto {
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
}
declare const UpdatePacienteDto_base: import("@nestjs/common").Type<Partial<CreatePacienteDto>>;
export declare class UpdatePacienteDto extends UpdatePacienteDto_base {
}
export {};
