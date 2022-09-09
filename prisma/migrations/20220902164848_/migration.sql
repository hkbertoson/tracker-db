-- CreateTable
CREATE TABLE `requests` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `project_id` VARCHAR(255) NOT NULL,
    `request_type` ENUM('Rem', 'Add on', 'New Logo', 'Migration') NULL,
    `name` VARCHAR(255) NULL,
    `account_name` VARCHAR(255) NULL,
    `legacy_org` ENUM('CSC', 'ES') NULL,
    `total_hours_spent` INTEGER NULL,
    `status` ENUM('To be Started', 'Work in Progress', 'Awaiting Customer Confirmation', 'Completed') NULL,
    `comment` TEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
