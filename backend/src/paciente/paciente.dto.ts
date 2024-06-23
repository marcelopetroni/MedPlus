import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreatePacienteDto {
    @ApiProperty({
    description: 'Nome do paciente',
    type: String,
    required: true,
    example: 'Francisco Conceição',
    })
    nome: string;

    @ApiProperty({
    description: 'CPF do paciente',
    type: String,
    required: true,
    example: '12345678910',
    })
    cpf: string;

    @ApiProperty({
    description: 'Data de nascimento do paciente ',
    type: Date,
    required: true,
    example: '1900-01-01',
    })
    dataNascimento: Date;

    @ApiProperty({
    description: 'RG do paciente',
    type: String,
    required: true,
    example: '1234567',
    })
    rg: string;

    @ApiProperty({
    description: 'Endereço do paciente',
    type: String,
    required: true,
    example: 'Rua dos Bobos',
    })
    endereco: string;

    @ApiProperty({
    description: 'CEP do paciente',
    type: String,
    required: true,
    example: '12345678',
     })
    cep: string;

    @ApiProperty({
    description: 'Número do paciente',
    type: String,
    required: true,
    example: '912345678',
    })
    numero: string;

    @ApiProperty({
    description: 'E-mail do paciente',
    type: String,
    required: true,
    example: 'franciscoconceicao@gmail.com',
    })
    email: string;

    @ApiProperty({
    description: 'Cidade do paciente',
    type: String,
    required: true,
    example: 'Recife',
    })
    cidade: string;

    @ApiProperty({
    description: 'Estado do paciente',
    type: String,
    required: true,
    example: 'Pernambuco',
    })
    estado: string;
  }

  export class UpdatePacienteDto extends PartialType(CreatePacienteDto) {}