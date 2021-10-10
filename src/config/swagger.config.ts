import { DocumentBuilder, SwaggerDocumentOptions } from '@nestjs/swagger';

const swaggerConfig = new DocumentBuilder()
  .setTitle('Homia API')
  .setDescription('Homia API documentation')
  .setVersion('1.0')
  .build();

const swaggerOptions: SwaggerDocumentOptions = {};

export default swaggerConfig;
