import { ClassConstructor, plainToClass } from 'class-transformer';
import { Paginated } from 'nestjs-paginate';

export type PaginatedV<T, V> = Omit<Paginated<V>, 'meta'> & {
  meta: Paginated<T>['meta'];
};

export const serialize = <T, V>(object: T, dto: ClassConstructor<V>): V => {
  return plainToClass(dto, object);
};

export const serializePaginated = <T, V>(
  object: Paginated<T>,
  dto: ClassConstructor<V>,
): PaginatedV<T, V> => {
  return { ...object, data: plainToClass(dto, object.data) };
};
