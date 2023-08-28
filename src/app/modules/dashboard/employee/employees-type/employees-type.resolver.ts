import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { EmploymentTypeService } from '@core/services/company/employment-type/employment-type.service';
import { EmploymentTypes } from '@core/types/employment-type.model';
import { isNil } from 'lodash';
import { map, of } from 'rxjs';

export const employeesTypeResolverData = (): {
  breadcrumb: ResolveFn<string | null>;
  employeeTypeData: ResolveFn<EmploymentTypes | null>;
} => {
  return {
    breadcrumb: route => {
      const id = route.paramMap.get('employeeTypeId');
      if (isNil(id)) return of(null);
      return inject(EmploymentTypeService)
        .getEmploymentTypeById(id)
        .pipe(
          map(data => {
            return data.name;
          })
        );
    },
    employeeTypeData: route => {
      const id = route.paramMap.get('employeeTypeId');
      if (isNil(id)) return of(null);
      return inject(EmploymentTypeService).getEmploymentTypeById(id);
    },
  };
};
