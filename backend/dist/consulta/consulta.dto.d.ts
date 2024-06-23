export declare class CreateConsultaDto {
    pacienteId: string;
    nomePaciente: string;
    especialidade: string;
    local: string;
    data: Date;
}
declare const UpdateConsultaDto_base: import("@nestjs/common").Type<Partial<CreateConsultaDto>>;
export declare class UpdateConsultaDto extends UpdateConsultaDto_base {
}
export {};
