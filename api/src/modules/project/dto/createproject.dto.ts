import { IsNotEmpty } from "class-validator";
import { IsAlpha, IsAlphanumeric, IsMobilePhone, IsNumber } from "class-validator/types/decorator/decorators";
import { ComponentEntity } from "src/modules/project/component.entity";

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
  components: ComponentEntity[]
}