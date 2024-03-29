import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { departmentFormConfig } from '@app/modules/dashboard/company/department/configs/departmentForm.config';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { DepartmentService } from '@core/services/company/department/department.service';
import { combineLatest, map, of, tap } from 'rxjs';
import { GroupFunctionDivisionService } from '@core/services/company/grou-function-division/group-function-division.service';
import { PositionService } from '@core/services/company/position/position.service';
import { TranslateKey } from '../../../../../../assets/i18n/enums/translate-key.enum';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateDepartmentComponent implements OnInit {
  departmentFormConfig = departmentFormConfig;
  protected readonly NavigationPaths = NavigationPaths;
  protected readonly ADD_INFORMATION = TranslateKey.ADD_INFORMATION;

  divisions$ = this.divisionService.getDivisionsList(100, 0).pipe(
    map(obj => {
      if (obj === null) {
        return {};
      } else {
        return obj.divisions;
      }
    })
  );

  positions$ = this.positionService.getPositionsList(999, 1).pipe(
    map(obj => {
      if (obj === null) {
        return {};
      } else {
        return obj.positions;
      }
    })
  );

  combinedDivisionPositions = combineLatest([
    this.divisions$,
    this.positions$,
  ]);
  positions = [] as any;
  divisions = [] as any;
  form!: FormGroup;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly departmentService: DepartmentService,
    private readonly divisionService: GroupFunctionDivisionService,
    private readonly positionService: PositionService,
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.combinedDivisionPositions.subscribe(
      ([divisions, positions]) => {
        this.divisions = divisions;
        this.positions = positions;
        this.addDataToForm();
      }
    );
  }

  addDepartment(form: FormGroup) {
    const requestBody = form.getRawValue();
    delete requestBody.numberOfJobRoles;
    if (this.departmentService.action == 'view') {
      this.departmentService
        .editDepartment(
          this.departmentService.selectedDepartment.id,
          requestBody
        )
        .pipe(
          tap(() =>
            this.router.navigate([NavigationPaths.BACK], {
              relativeTo: this.route,
            })
          )
        )
        .subscribe(() => console.log('EDIT'));
    } else {
      this.departmentService
        .createDepartment(requestBody)
        .pipe(
          tap(() =>
            this.router.navigate([NavigationPaths.BACK], {
              relativeTo: this.route,
            })
          )
        )
        .subscribe(() => console.log('CREATE'));
    }
  }

  addDataToForm() {
    let positions = [] as any[];
    let divisionsNames = [] as any[];
    if (this.positions?.length) {
      positions = this.positions.map((position: any) => ({
        displayName: position.name,
        value: position.id,
      }));
    }
    if (this.divisions?.length) {
      divisionsNames = this.divisions.map((division: any) => ({
        displayName: division.name,
        value: division.id,
      }));
    }
    this.departmentFormConfig.find(r => {
      if (r.key == 'divisionId') {
        r.data = divisionsNames;
      }
      if (r.key == 'managerId') {
        r.data = positions;
      }
    });
    if (
      Object.keys(this.departmentService.selectedDepartment).length
    ) {
      Object.keys(this.departmentService.selectedDepartment).forEach(
        (key: any) => {
          if (this.form.controls[key]) {
            this.form.controls[key].setValue(
              this.departmentService.selectedDepartment[key]
            );
          }
          this.departmentFormConfig.forEach(select => {
            if (select.data) {
              select.data.find((data: any) => {
                if (
                  data.value ===
                  this.departmentService.selectedDepartment[key]
                ) {
                  data.preSelected = true;
                }
              });
            }
          });
        }
      );
    }
    this.departmentFormConfig = this.departmentFormConfig.map(
      select => {
        if (select.data?.length < 1) {
          return {
            ...select,
            disabled: true,
          };
        } else {
          return select;
        }
      }
    );
    this.cdr.detectChanges();
  }
}
