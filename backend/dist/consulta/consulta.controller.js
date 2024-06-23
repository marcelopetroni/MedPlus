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
exports.ConsultaController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const consulta_service_1 = require("./consulta.service");
const consulta_dto_1 = require("./consulta.dto");
let ConsultaController = class ConsultaController {
    constructor(consultaService) {
        this.consultaService = consultaService;
    }
    async createConsulta(consultaData) {
        return this.consultaService.createConsulta(consultaData);
    }
    async getConsultas() {
        return this.consultaService.getConsultas();
    }
    async getConsultaById(id) {
        return this.consultaService.getConsultaById(id);
    }
    async updateConsulta(id, consultaData) {
        return this.consultaService.updateConsulta(id, consultaData);
    }
    async deleteConsulta(id) {
        return this.consultaService.deleteConsulta(id);
    }
};
exports.ConsultaController = ConsultaController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [consulta_dto_1.CreateConsultaDto]),
    __metadata("design:returntype", Promise)
], ConsultaController.prototype, "createConsulta", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ConsultaController.prototype, "getConsultas", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ConsultaController.prototype, "getConsultaById", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, consulta_dto_1.UpdateConsultaDto]),
    __metadata("design:returntype", Promise)
], ConsultaController.prototype, "updateConsulta", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ConsultaController.prototype, "deleteConsulta", null);
exports.ConsultaController = ConsultaController = __decorate([
    (0, swagger_1.ApiTags)('consulta'),
    (0, common_1.Controller)('consulta'),
    __metadata("design:paramtypes", [consulta_service_1.ConsultaService])
], ConsultaController);
//# sourceMappingURL=consulta.controller.js.map