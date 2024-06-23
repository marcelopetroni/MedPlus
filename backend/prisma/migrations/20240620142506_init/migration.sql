/*
  Warnings:

  - You are about to drop the column `dataDeNascimento` on the `Paciente` table. All the data in the column will be lost.
  - Added the required column `nomePaciente` to the `Consulta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dataNascimento` to the `Paciente` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Consulta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pacienteId" INTEGER NOT NULL,
    "nomePaciente" TEXT NOT NULL,
    "especialidade" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "data" DATETIME NOT NULL,
    CONSTRAINT "Consulta_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "Paciente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Consulta" ("data", "especialidade", "id", "local", "pacienteId") SELECT "data", "especialidade", "id", "local", "pacienteId" FROM "Consulta";
DROP TABLE "Consulta";
ALTER TABLE "new_Consulta" RENAME TO "Consulta";
CREATE TABLE "new_Paciente" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
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
INSERT INTO "new_Paciente" ("cep", "cidade", "cpf", "email", "endereco", "estado", "id", "nome", "numero", "rg") SELECT "cep", "cidade", "cpf", "email", "endereco", "estado", "id", "nome", "numero", "rg" FROM "Paciente";
DROP TABLE "Paciente";
ALTER TABLE "new_Paciente" RENAME TO "Paciente";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
