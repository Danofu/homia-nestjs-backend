import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { ClassConstructor } from 'class-transformer';
import { Paginated } from 'nestjs-paginate';
import { Observable, map } from 'rxjs';
import { serialize, serializePaginated } from '../helpers/serialize';

@Injectable()
export class SerializeInterceptor<T> implements NestInterceptor {
  constructor(private dto: ClassConstructor<T>) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((value: T | Paginated<T>) => {
        if (value instanceof Paginated) {
          return serializePaginated(value, this.dto);
        }
        return serialize(value, this.dto);
      }),
    );
  }
}
