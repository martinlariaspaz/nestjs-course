import { ValidationPipe } from "@nestjs/common";

export const GlobalValidationPipe = new ValidationPipe({
  forbidNonWhitelisted:true,
})