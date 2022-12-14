import { Controller, Post, UseInterceptors, UploadedFiles, Body } from "@nestjs/common/decorators";
import { FileInterceptor } from "@nestjs/platform-express";
import { FilesInterceptor } from "@nestjs/platform-express/multer";
import { createProjectDto } from "./dto/createproject.dto";
import { ProjectService } from "./project.service";

@Controller()
export class ProjectController {
  constructor(private readonly projectService: ProjectService) { }

  @Post('api/create-project')
  @UseInterceptors(FilesInterceptor('files'))
  async createProject(@UploadedFiles() files: Array<Express.Multer.File>, @Body() createProjectDto: createProjectDto): Promise<any> {
    
  }
}