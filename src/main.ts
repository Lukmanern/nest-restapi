import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('SimpleTestCase example')
    .setDescription('This is Desc')
    .setVersion('1.0')
    //.addTag('SimpleTestCase')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors();
  await app.listen(3000);

  console.log('Application is running on: http://localhost:3000');
}

bootstrap();
