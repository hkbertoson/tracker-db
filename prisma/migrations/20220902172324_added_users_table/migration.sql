-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `eid` VARCHAR(255) NOT NULL,
    `legacy_org` VARCHAR(11) NOT NULL,
    `cost_center` VARCHAR(255) NULL,
    `profit_center` VARCHAR(255) NULL,
    `phone_number` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
