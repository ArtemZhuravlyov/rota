import { ResolveFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { EmploymentTypeService } from '@core/services/company/employment-type/employment-type.service';
import { EmploymentTypes } from '@core/types/employment-type.model';
import { isNil } from 'lodash';
import { of } from 'rxjs';

export const employeesTypeResolverData = (): {
  breadcrumb: ResolveFn<string | null>;
  employeeTypeData: ResolveFn<EmploymentTypes | null>;
} => {
  return {
    breadcrumb: _ => {
      const name =
        inject(Router).getCurrentNavigation()?.extras.state?.['name'];
      if (isNil(name)) return of(null);
      return name;
    },
    employeeTypeData: route => {
      const id = route.paramMap.get('employeeTypeId');
      if (isNil(id)) return of(null);
      return inject(EmploymentTypeService).getEmploymentTypeById(id);
    },
  };
};
