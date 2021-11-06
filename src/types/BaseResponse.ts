export interface IResponse<T> {
  Code: number;
  Data: T;
  Message: string;
}
