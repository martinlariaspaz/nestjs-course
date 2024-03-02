import { IsOptional, IsString, IsUUID, MinLength } from "class-validator";

export class CreateCarDTO {
  @IsString()
  @MinLength(3)
  readonly brand: string;
  @IsString()
  @MinLength(3)
  readonly model: string;
};

export class UpdateCarDTO{
  @IsUUID()
  @IsOptional()
  readonly id?: string;

  @IsString()
  @IsOptional()
  readonly brand?: string;

  @IsString()
  @IsOptional()
  readonly model?: string;
}