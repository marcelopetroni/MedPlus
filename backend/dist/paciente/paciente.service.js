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
exports.PacienteService = void 0;
const common_1 = require("@nestjs/common");
const paciente_repository_1 = require("./paciente.repository");
let PacienteService = class PacienteService {
    constructor(pacienteRepository) {
        this.pacienteRepository = pacienteRepository;
    }
    async createPaciente(data) {
        const pacienteData = {
            ...data,
            dataNascimento: new Date(data.dataNascimento).toISOString()
        };
        return this.pacienteRepository.create(pacienteData);
    }
    async getPacientes() {
        return this.pacienteRepository.findAll();
    }
    async getPacienteById(id) {
        return this.pacienteRepository.findOne({ id });
    }
    async updatePaciente(id, data) {
        const pacienteData = {
            ...data,
            dataNascimento: new Date(data.dataNascimento).toISOString()
        };
        return this.pacienteRepository.update(id, pacienteData);
    }
    async deletePaciente(id) {
        return this.pacienteRepository.remove(id);
    }
};
exports.PacienteService = PacienteService;
exports.PacienteService = PacienteService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [paciente_repository_1.PacienteRepository])
], PacienteService);
//# sourceMappingURL=paciente.service.js.map