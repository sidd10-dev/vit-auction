import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1671302157181 implements MigrationInterface {
    name = 'migration1671302157181'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`projects\` CHANGE \`blueprint\` \`blueprint\` longblob NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`components\` CHANGE \`blueprint\` \`blueprint\` longblob NOT NULL DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`components\` CHANGE \`blueprint\` \`blueprint\` longblob NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`projects\` CHANGE \`blueprint\` \`blueprint\` longblob NOT NULL`);
    }

}
