import { Injectable } from "@nestjs/common/decorators";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ComponentEntity } from "./component.entity";
import { createComponentDto } from "./dto/createComponent.dto";
import { createProjectDto } from "./dto/createproject.dto";
import { ProjectEntity } from "./project.entity";

@Injectable()
export class ProjectService {
  // Intial Repositories
  constructor(@InjectRepository(ProjectEntity) private readonly projectRepository: Repository<ProjectEntity>, @InjectRepository(ComponentEntity) private readonly componentRepository: Repository<ComponentEntity>) { }

  // Create a new Project
  async createProject(files: Array<Express.Multer.File>, createProjectDto: createProjectDto): Promise<ProjectEntity> {
    try {
      const project = new ProjectEntity()

      Object.assign(project, Object.keys(createProjectDto)
        .filter((key) => key != "components")
        .reduce((obj, key) => {
          obj[key] = createProjectDto[key];
          return obj;
        }, {}))

      // if (files.length > 0) {
      //   project.blueprint = files[0].buffer
      // }


      await this.projectRepository.save(project)

      // Creating Components
      createProjectDto.components.forEach(async (component, idx) => {
        try {
          await this.createComponent("string", component, project)
        } catch (e) {
          throw e
        }
      })

      return project
    } catch (e) {
      throw e
    }
  }

  // Creating a new component
  async createComponent(file: any, createComponentDto: createComponentDto, project: ProjectEntity): Promise<any> {
    try {
      const component = new ComponentEntity()

      Object.assign(component, createComponentDto)
      // component.blueprint = file.buffer
      component.project = project

      await this.componentRepository.save(component)
    } catch (e) {
      throw e
    }
  }
}