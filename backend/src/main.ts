import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from "@nestjs/common";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import * as cors from 'cors';
import * as cookieParser from 'cookie-parser';
import helmet from 'helmet';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const whitelist = process.env.CORS_WHITELIST;
  
  const corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    }, credentials: true}
  app.setGlobalPrefix('api')
  app.useGlobalPipes(
   new ValidationPipe({
     whitelist: true,
     forbidNonWhitelisted: true,
   })
  );
  const config = new DocumentBuilder()
   .setTitle('Fitco chat Rest')
   .setDescription('The chat API description')
   .setVersion('1.0')
   .addBearerAuth()
   .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.use(cors(corsOptions))
  app.use(cookieParser())
  app.use(helmet());
  await app.listen(process.env.PORT);
}
bootstrap();
