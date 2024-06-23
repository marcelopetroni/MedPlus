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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacienteController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const paciente_service_1 = require("./paciente.service");
const paciente_dto_1 = require("./paciente.dto");
let PacienteController = class PacienteController {
    constructor(pacienteService) {
        this.pacienteService = pacienteService;
    }
    async createPaciente(pacienteData) {
        return this.pacienteService.createPaciente(pacienteData);
    }
    async getPacientes() {
        return this.pacienteService.getPacientes();
    }
    async getPacienteById(id) {
        return this.pacienteService.getPacienteById(id);
    }
    async updatePaciente(id, pacienteData) {
        return this.pacienteService.updatePaciente(id, pacienteData);
    }
    async deletePaciente(id) {
        return this.pacienteService.deletePaciente(id);
    }
};
exports.PacienteController = PacienteController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [paciente_dto_1.CreatePacienteDto]),
    __metadata("design:returntype", Promise)
], PacienteController.prototype, "createPaciente", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PacienteController.prototype, "getPacientes", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PacienteController.prototype, "getPacienteById", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, paciente_dto_1.UpdatePacienteDto]),
    __metadata("design:returntype", Promise)
], PacienteController.prototype, "updatePaciente", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PacienteController.prototype, "deletePaciente", null);
exports.PacienteController = PacienteController = __decorate([
    (0, swagger_1.ApiTags)('paciente'),
    (0, common_1.Controller)('paciente'),
    __metadata("design:paramtypes", [paciente_service_1.PacienteService])
], PacienteController);
//# sourceMappingURL=paciente.controller.js.map