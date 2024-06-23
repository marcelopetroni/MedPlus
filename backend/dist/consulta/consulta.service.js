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
exports.ConsultaService = void 0;
const common_1 = require("@nestjs/common");
const consulta_repository_1 = require("./consulta.repository");
let ConsultaService = class ConsultaService {
    constructor(consultaRepository) {
        this.consultaRepository = consultaRepository;
    }
    async createConsulta(data) {
        const consultaData = {
            paciente: {
                connect: { id: data.pacienteId },
            },
            nomePaciente: data.nomePaciente,
            especialidade: data.especialidade,
            local: data.local,
            data: new Date(data.data).toISOString()
        };
        return this.consultaRepository.create(consultaData);
    }
    async getConsultas() {
        return this.consultaRepository.findAll();
    }
    async getConsultaById(id) {
        return this.consultaRepository.findOne({ id });
    }
    async updateConsulta(id, data) {
        const consultaData = {
            paciente: {
                connect: { id: data.pacienteId },
            },
            nomePaciente: data.nomePaciente,
            especialidade: data.especialidade,
            local: data.local,
            data: new Date(data.data).toISOString(),
        };
        return this.consultaRepository.update(id, consultaData);
    }
    async deleteConsulta(id) {
        return this.consultaRepository.remove({ id });
    }
};
exports.ConsultaService = ConsultaService;
exports.ConsultaService = ConsultaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [consulta_repository_1.ConsultaRepository])
], ConsultaService);
//# sourceMappingURL=consulta.service.js.map