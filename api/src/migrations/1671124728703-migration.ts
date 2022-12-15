import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1671124728703 implements MigrationInterface {
    name = 'migration1671124728703'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`projects\` (\`id\` int NOT NULL AUTO_INCREMENT, \`phone\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`debrief\` varchar(500) NOT NULL, \`blueprint\` longblob NOT NULL, \`address\` varchar(100) NOT NULL, \`city\` varchar(255) NOT NULL, \`state\` varchar(255) NOT NULL, \`pincode\` int NOT NULL, \`budget\` int NOT NULL, \`quantity\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`components\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`desc\` varchar(255) NOT NULL, \`blueprint\` longblob NOT NULL, \`industry\` varchar(255) NOT NULL, \`price\` int NOT NULL, \`projectId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`components\` ADD CONSTRAINT \`FK_9ee509add2d20cafa22c34b67ba\` FOREIGN KEY (\`projectId\`) REFERENCES \`projects\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`components\` DROP FOREIGN KEY \`FK_9ee509add2d20cafa22c34b67ba\``);
        await queryRunner.query(`DROP TABLE \`components\``);
        await queryRunner.query(`DROP TABLE \`projects\``);
    }

}
