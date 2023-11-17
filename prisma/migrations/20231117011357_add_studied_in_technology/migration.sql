/*
  Warnings:

  - Added the required column `studied` to the `tecnologies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tecnologies" ADD COLUMN     "studied" BOOLEAN NOT NULL;
