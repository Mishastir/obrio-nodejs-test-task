import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

import { AppModule } from "./app.module";

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { bufferLogs: true });

  app.setGlobalPrefix("api");

  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));

  const swaggerConfig = new DocumentBuilder()
    .setTitle("OBRIO test task Backend API")
    .setVersion("1.0.0")
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup("docs", app, document);

  await app.listen(3000);
}

bootstrap();
