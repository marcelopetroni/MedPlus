import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaClient } from '@prisma/client'
import { PacienteModule } from './paciente/paciente.module';
import { ConsultaModule } from './consulta/consulta.module';

@Module({
  imports: [PrismaModule, PacienteModule, ConsultaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
