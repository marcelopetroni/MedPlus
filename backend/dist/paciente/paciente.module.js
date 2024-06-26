"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacienteModule = void 0;
const common_1 = require("@nestjs/common");
const paciente_service_1 = require("./paciente.service");
const paciente_controller_1 = require("./paciente.controller");
const paciente_repository_1 = require("./paciente.repository");
const prisma_service_1 = require("../prisma/prisma.service");
let PacienteModule = class PacienteModule {
};
exports.PacienteModule = PacienteModule;
exports.PacienteModule = PacienteModule = __decorate([
    (0, common_1.Module)({
        controllers: [paciente_controller_1.PacienteController],
        providers: [paciente_service_1.PacienteService, paciente_repository_1.PacienteRepository, prisma_service_1.PrismaService],
    })
], PacienteModule);
//# sourceMappingURL=paciente.module.js.map