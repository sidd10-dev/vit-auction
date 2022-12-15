import { Injectable } from "@nestjs/common/decorators";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ComponentEntity } from "./component.entity";
import { createProjectDto } from "./dto/createproject.dto";
import { ProjectEntity } from "./project.entity";

@Injectable()
export class ProjectService {
  // Intial Repositories
  constructor(@InjectRepository(ProjectEntity) private readonly projectRepository: Repository<ProjectEntity>, @InjectRepository(ComponentEntity) private readonly componentRepository: Repository<ComponentEntity>) { }

  // Create a new Project
  async createProject(files: Array<Express.Multer.File>, createProjectDto: createProjectDto): Promise<any> {
    try {
      const project = new ProjectEntity()

      Object.assign(project, Object.keys(createProjectDto)
        .filter((key) => key != "components")
        .reduce((obj, key) => {
          obj[key] = createProjectDto[key];
          return obj;
        }, {}))

      project.blueprint = files[0].buffer

      await this.projectRepository.save(project)
    } catch (e) {
      throw e
    }
  }
}