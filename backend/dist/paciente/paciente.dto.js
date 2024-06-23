"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePacienteDto = exports.CreatePacienteDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreatePacienteDto {
}
exports.CreatePacienteDto = CreatePacienteDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nome do paciente',
        type: String,
        required: true,
        example: 'Francisco Conceição',
    }),
    __metadata("design:type", String)
], CreatePacienteDto.prototype, "nome", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'CPF do paciente',
        type: String,
        required: true,
        example: '12345678910',
    }),
    __metadata("design:type", String)
], CreatePacienteDto.prototype, "cpf", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Data de nascimento do paciente ',
        type: Date,
        required: true,
        example: '1900-01-01',
    }),
    __metadata("design:type", Date)
], CreatePacienteDto.prototype, "dataNascimento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'RG do paciente',
        type: String,
        required: true,
        example: '1234567',
    }),
    __metadata("design:type", String)
], CreatePacienteDto.prototype, "rg", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Endereço do paciente',
        type: String,
        required: true,
        example: 'Rua dos Bobos',
    }),
    __metadata("design:type", String)
], CreatePacienteDto.prototype, "endereco", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'CEP do paciente',
        type: String,
        required: true,
        example: '12345678',
    }),
    __metadata("design:type", String)
], CreatePacienteDto.prototype, "cep", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Número do paciente',
        type: String,
        required: true,
        example: '912345678',
    }),
    __metadata("design:type", String)
], CreatePacienteDto.prototype, "numero", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'E-mail do paciente',
        type: String,
        required: true,
        example: 'franciscoconceicao@gmail.com',
    }),
    __metadata("design:type", String)
], CreatePacienteDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Cidade do paciente',
        type: String,
        required: true,
        example: 'Recife',
    }),
    __metadata("design:type", String)
], CreatePacienteDto.prototype, "cidade", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Estado do paciente',
        type: String,
        required: true,
        example: 'Pernambuco',
    }),
    __metadata("design:type", String)
], CreatePacienteDto.prototype, "estado", void 0);
class UpdatePacienteDto extends (0, swagger_1.PartialType)(CreatePacienteDto) {
}
exports.UpdatePacienteDto = UpdatePacienteDto;
//# sourceMappingURL=paciente.dto.js.map