import { Inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DocumentCreate } from '../../types/document.interface';
import { ENVIRONMENT } from '@app/app.module';
import { Environment } from '@core/types/environment';
import { AuthService } from '@core/services/account/auth.service';

const PAGE_SIZE = 10;
const PAGE_INDEX = 0;

@Injectable({ providedIn: 'root' })
export class DocumentsService {
  constructor(
    private http: HttpClient,
    @Inject(ENVIRONMENT) private env: Environment,
    private authService: AuthService
  ) {}

  //todo add types
  getFolders(
    userId: string,
    companyId: string,
    pageSize = PAGE_SIZE,
    pageIndex = PAGE_INDEX
  ): Observable<any> {
    console.log({ userId, companyId });
    let params = new HttpParams();

    if (pageSize && pageIndex && pageIndex >= 0) {
      params = params
        .append('pageSize', pageSize)
        .append('pageIndex', pageIndex + 1);
    }
    return this.http.post<any>(
      `${this.env.apiUrlDocument}/document-category/${userId}/${companyId}`,
      {
        name: '',
        description: '',
        manager: '',
        isActive: true,
      },
      { params: params }
    );
  }

  //todo add types
  createFolder(
    body: DocumentCreate,
    userId: string,
    companyId: string
  ): Observable<any> {
    return this.http.post<any>(
      `${this.env.apiUrlDocument}/document-category/create/${userId}/${companyId}`,
      body
    );
  }

  deleteFolder(
    id: string,
    userId: string,
    companyId: string
  ): Observable<void> {
    console.log('service delete');
    return this.http.delete<any>(
      `${this.env.apiUrlDocument}/document-category/${userId}/${companyId}/${id}`
    );
  }

  //todo url???
  getDocsList(userId: string, companyId: string, body: any) {
    return this.http.post<any>(
      `${this.env.apiUrlDocument}/document/${userId}/${companyId}`,
      {
        documentName: '',
        documentCategory: body.folderId,
        isActive: true,
      },
      {
        params: {
          pageSize: body.pageSize,
          pageIndex: body.pageIndex,
        },
      }
    );
  }
}
