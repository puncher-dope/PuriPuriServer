export class CreateCardWaitersDto {
  name: string;
  category:
    | 'wine'
    | 'vodka'
    | 'cognac'
    | 'wisky'
    | 'coffee'
    | 'coctail'
    | 'limonade';
  volume: string;
  structure: string;
  comment?: string;
  description?: string;
}

export class ApiResponseDto<T> {
  data: T;
  message: string | null;
}
