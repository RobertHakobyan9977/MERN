export interface IErrorMessage {
  property: string;
  message: string;
}

export interface IError {
  message: IErrorMessage[];
  error: string;
  statusCode: number;
}

export interface IFetchError {
  status: number;
  data: IError;
}
