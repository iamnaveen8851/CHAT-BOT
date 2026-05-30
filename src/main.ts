import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('Hello world from BABU AI Deployed in Kubernetes............!!!');
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
