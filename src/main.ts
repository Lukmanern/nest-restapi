import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
  app.enableCors();
  console.log('Application is running on: http://localhost:3000');
}
bootstrap();
