import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { Benefits } from '@core/types/benefit.model';
import { CommonPaginationParams } from '@core/types/pagination.type';

@Injectable()
export class BenefitService {
  private readonly apiUrlCompany = environment.apiUrlCompany;
  private httpClient = inject(HttpClient);

  getList({
    userId,
    companyId,
    pageSize,
    pageIndex,
  }: CommonPaginationParams): Observable<Benefits> {
    return this.httpClient
      .post<Benefits>(
        `${this.apiUrlCompany}/benefit/${userId}/${companyId}`,
        {},
        { params: { pageSize, pageIndex } }
      )
      .pipe(
        catchError(() =>
          of<Benefits>({ benefits: [], totalCount: 0 })
        )
      );
  }
}
