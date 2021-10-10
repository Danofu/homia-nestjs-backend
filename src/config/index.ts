import './dotenv';
import './crud-overrite';

import * as ormConfig from './orm.config';
import appConfig from './app.config';
import validationPipeOptions from './validation-pipe.config';
import entitiesConfig from './entities.config';
import swaggerConfig from './swagger.config';
import crudConfig from './crud.config';
import firebaseConfig from './firebase.config';
import appProvidersConfig from './app-providers.config';
import beamsConfig from './beams.config';

const config = {
  typeorm: ormConfig,
  app: appConfig,
  appProviders: appProvidersConfig,
  beams: beamsConfig,
  crud: crudConfig,
  swagger: swaggerConfig,
  entities: entitiesConfig,
  validationPipe: validationPipeOptions,
  firebase: firebaseConfig,
};

export default config;
