import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateConsultaDto {
    @ApiProperty({
    description: 'Id do paciente',
    type: String,
    required: true,
    example: '123456789',
    })
    pacienteId: string;

    @ApiProperty({
    description: 'Nome do paciente',
    type: String,
    required: true,
    example: 'Francisco Conceição',
    })
    nomePaciente: string;

    @ApiProperty({
    description: 'Especialidade da consulta',
    type: String,
    required: true,
    example: 'Odontologia',
    })
    especialidade: string;

    @ApiProperty({
    description: 'Local da consulta',
    type: String,
    required: true,
    example: 'Hospital Augusto Neves',
    })
    local: string;

    @ApiProperty({
    description: 'Data da consulta',
    type: Date,
    required: true,
    example: '2020-01-31',
    })
    data: Date;
  }

  export class UpdateConsultaDto extends PartialType(CreateConsultaDto) {}