/*
  Warnings:

  - The primary key for the `Consulta` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Paciente` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Consulta" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "pacienteId" TEXT NOT NULL,
    "nomePaciente" TEXT NOT NULL,
    "especialidade" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "data" DATETIME NOT NULL,
    CONSTRAINT "Consulta_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "Paciente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Consulta" ("data", "especialidade", "id", "local", "nomePaciente", "pacienteId") SELECT "data", "especialidade", "id", "local", "nomePaciente", "pacienteId" FROM "Consulta";
DROP TABLE "Consulta";
ALTER TABLE "new_Consulta" RENAME TO "Consulta";
CREATE TABLE "new_Paciente" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "dataNascimento" DATETIME NOT NULL,
    "rg" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL
);
INSERT INTO "new_Paciente" ("cep", "cidade", "cpf", "dataNascimento", "email", "endereco", "estado", "id", "nome", "numero", "rg") SELECT "cep", "cidade", "cpf", "dataNascimento", "email", "endereco", "estado", "id", "nome", "numero", "rg" FROM "Paciente";
DROP TABLE "Paciente";
ALTER TABLE "new_Paciente" RENAME TO "Paciente";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
