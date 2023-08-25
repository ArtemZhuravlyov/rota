import { HttpParams } from '@angular/common/http';

export const createHttpParams = (params: {
  [key: string]: number | string;
}): HttpParams =>
  Object.keys(params).reduce(
    (httpParams, paramName) =>
      httpParams.set(paramName, params[paramName]),
    new HttpParams()
  );
