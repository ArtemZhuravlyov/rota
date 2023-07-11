import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import { OrganogramChartItem, OrganogramResponse } from '@core/types/organogram';
import { MOCK_ORGANOGRAM } from '@core/services/organogram/mock';


@Injectable({
  providedIn: 'root'
})
export class OrganogramService {

  constructor() { }

  getOrganogram(): Observable<OrganogramChartItem[]> {
    return of(MOCK_ORGANOGRAM).pipe(
      map(res => this.buildOrganogramChartData(res))
    )
  }

  private buildOrganogramChartData(orgResponse: OrganogramResponse[]): OrganogramChartItem[] {
    return orgResponse.map(item => ({
      id: item.employeeId,
      area: 'Corporate',
      imageUrl: item.employeeAvatar,
      isLoggedUser: false,
      name: item.employeeName,
      office: item.managerPosition,
      parentId: item.managerId,
      positionName: item.employeePosition,
      profileUrl: "",
      size: "",
      tags: "",
      initials: this.buildInitials(item.employeeName).toUpperCase()
    }))
  }

  private buildInitials(name: string): string {
    if (!name) {
      return '';
    }
    return name.split(' ').reduce((acc, curr) => acc += curr[0], '')
  }
}
