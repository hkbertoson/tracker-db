/*
  Warnings:

  - Made the column `status` on table `requests` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `requests` MODIFY `status` VARCHAR(255) NOT NULL;
