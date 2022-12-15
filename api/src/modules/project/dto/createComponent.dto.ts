import { IsAlpha, IsAlphanumeric, IsNotEmpty, IsNumber } from "class-validator";

export class createComponentDto {
  @IsNotEmpty()
  @IsAlphanumeric()
  name: string

  @IsNotEmpty()
  @IsAlphanumeric()
  desc: string

  @IsNotEmpty()
  @IsAlphanumeric()
  industry: string

  @IsNotEmpty()
  @IsNumber()
  price: number
}