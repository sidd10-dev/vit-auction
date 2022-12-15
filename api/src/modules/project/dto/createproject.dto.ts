import { IsDate, IsNotEmpty } from "class-validator";
import { IsAlpha, IsAlphanumeric, IsMobilePhone, IsNumber } from "class-validator";
import { ComponentEntity } from "src/modules/project/component.entity";
import { createComponentDto } from "./createComponent.dto";

export class createProjectDto {
  @IsNotEmpty()
  @IsMobilePhone()
  phone: string

  @IsNotEmpty()
  @IsAlpha()
  name: string

  @IsNotEmpty()
  @IsAlphanumeric()
  debrief: string

  @IsNotEmpty()
  @IsAlphanumeric()
  address: string

  @IsNotEmpty()
  @IsAlpha()
  city: string

  @IsNotEmpty()
  @IsAlpha()
  state: string

  @IsNotEmpty()
  @IsNumber()
  pincode: number

  @IsNotEmpty()
  @IsNumber()
  budget: number

  @IsNotEmpty()
  @IsNumber()
  quantity: number

  @IsNotEmpty()
  @IsDate()
  date: Date

  @IsNotEmpty()
  components: createComponentDto[]
}