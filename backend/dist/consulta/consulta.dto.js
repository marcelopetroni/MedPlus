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
exports.UpdateConsultaDto = exports.CreateConsultaDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateConsultaDto {
}
exports.CreateConsultaDto = CreateConsultaDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id do paciente',
        type: String,
        required: true,
        example: '123456789',
    }),
    __metadata("design:type", String)
], CreateConsultaDto.prototype, "pacienteId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nome do paciente',
        type: String,
        required: true,
        example: 'Francisco Conceição',
    }),
    __metadata("design:type", String)
], CreateConsultaDto.prototype, "nomePaciente", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Especialidade da consulta',
        type: String,
        required: true,
        example: 'Odontologia',
    }),
    __metadata("design:type", String)
], CreateConsultaDto.prototype, "especialidade", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Local da consulta',
        type: String,
        required: true,
        example: 'Hospital Augusto Neves',
    }),
    __metadata("design:type", String)
], CreateConsultaDto.prototype, "local", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Data da consulta',
        type: Date,
        required: true,
        example: '2020-01-31',
    }),
    __metadata("design:type", Date)
], CreateConsultaDto.prototype, "data", void 0);
class UpdateConsultaDto extends (0, swagger_1.PartialType)(CreateConsultaDto) {
}
exports.UpdateConsultaDto = UpdateConsultaDto;
//# sourceMappingURL=consulta.dto.js.map