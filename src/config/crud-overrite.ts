import { CreateManyDto, CrudRequest } from '@nestjsx/crud';
import { DeepPartial } from 'typeorm';

declare module '@nestjsx/crud' {
  interface CrudController<T> {
    createOneBase?(req: CrudRequest, dto: DeepPartial<T>): Promise<T>;
    createManyBase?(
      req: CrudRequest,
      dto: CreateManyDto<DeepPartial<T>>,
    ): Promise<T[]>;
    updateOneBase?(req: CrudRequest, dto: DeepPartial<T>): Promise<T>;
    replaceOneBase?(req: CrudRequest, dto: DeepPartial<T>): Promise<T>;
  }
}
