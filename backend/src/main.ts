import { NestFactory } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: false });

  const config = new DocumentBuilder()
    .setTitle("Hydra project")
    .setDescription("The cats API description")
    .setVersion("1.0")
    .addTag("cats")
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup("swagger", app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });

  app.enableCors({ credentials: true, origin: true });

  await app.listen(7777);
}
bootstrap();
