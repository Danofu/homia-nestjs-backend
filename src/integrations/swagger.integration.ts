import { INestApplication } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';
import config from 'src/config';

export const initializeSwagger = (app: INestApplication) => {
  const document = SwaggerModule.createDocument(app, config.swagger);
  SwaggerModule.setup('api', app, document);
};
