import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { CrudConfigService } from '@nestjsx/crud';
import * as helmet from 'helmet';
import config from './config';
import { initializeFirebase } from './integrations/firebase.integration';
import { initializeSwagger } from './integrations/swagger.integration';
import { logger } from './middlewares/logger.middleware';

// config CRUD options before AppModuleImport
CrudConfigService.load(config.crud);

import { AppModule } from './app.module';
import { initializeBeams } from './integrations/beams.integration';

// integrations
initializeFirebase();
initializeBeams();

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  // custom middlewares
  app.use(logger);

  // integrations
  app.enableCors();
  app.use(helmet());

  // validation pipe
  app.useGlobalPipes(new ValidationPipe(config.validationPipe));

  // integrations
  initializeSwagger(app);

  const { port } = config.app;

  await app.listen(port, () => {
    console.log(`App initialized in port ${port}.`);
  });
}
bootstrap();
