/*
  Warnings:

  - Made the column `request_type` on table `requests` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `requests` MODIFY `request_type` VARCHAR(255) NOT NULL;
