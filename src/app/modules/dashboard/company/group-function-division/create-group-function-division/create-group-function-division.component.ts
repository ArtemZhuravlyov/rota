import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { groupFunctionDivisionFormConfig } from '@app/modules/dashboard/company/group-function-division/configs/group-function-division-form.config';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { ButtonTypeEnum } from '@core/enums/button-type.enum';
import { FormGroup } from '@angular/forms';
import { map, of, tap } from 'rxjs';
import { GroupFunctionDivisionService } from '@core/services/company/grou-function-division/group-function-division.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PositionService } from '@core/services/company/position/position.service';
import { TranslateKey } from '../../../../../../assets/i18n/enums/translate-key.enum';

@Component({
  selector: 'app-create-group-function-division',
  templateUrl: './create-group-function-division.component.html',
  styleUrls: ['./create-group-function-division.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateGroupFunctionDivisionComponent implements OnInit {
  protected readonly ADD_DIVISION = TranslateKey.ADD_DIVISION;

  groupFunctionDivisionFormConfig = groupFunctionDivisionFormConfig;
  protected readonly NavigationPaths = NavigationPaths;

  positions$ = this.positionService.getPositionsList(999, 1).pipe(
    map(obj => {
      if (obj == null) {
        return {};
      } else {
        return obj.positions;
      }
    })
  );
  positions = [] as any;
  form!: FormGroup;

  constructor(
    private readonly divisionService: GroupFunctionDivisionService,
    private readonly positionService: PositionService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.positions$.subscribe((positionList: any) => {
      this.positions = positionList;
      this.addDataToForm();
    });
  }

  addDivision(form: FormGroup) {
    if (this.divisionService.action == 'view') {
      const requestBody = form.getRawValue();
      delete requestBody.numberOfDepartment;
      this.divisionService
        .editDivision(
          this.divisionService.selectedDivision.id,
          requestBody
        )
        .pipe(
          tap(() =>
            this.router.navigate([NavigationPaths.BACK], {
              relativeTo: this.route,
            })
          )
        )
        .subscribe();
    } else {
      this.divisionService
        .createDivision(form.getRawValue())
        .pipe(
          tap(() =>
            this.router.navigate([NavigationPaths.BACK], {
              relativeTo: this.route,
            })
          )
        )
        .subscribe();
    }
  }

  addDataToForm() {
    let positions = [] as any[];
    if (this.positions?.length) {
      positions = this.positions.map((position: any) => ({
        displayName: position.name,
        value: position.id,
      }));
    }
    this.groupFunctionDivisionFormConfig.find(r => {
      if (r.key == 'managerId') {
        r.data = positions;
      }
    });

    if (Object.keys(this.divisionService.selectedDivision).length) {
      Object.keys(this.divisionService.selectedDivision).forEach(
        (key: any) => {
          if (this.form.controls[key]) {
            this.form.controls[key].setValue(
              this.divisionService.selectedDivision[key]
            );
          }
          this.groupFunctionDivisionFormConfig.forEach(select => {
            if (select.data) {
              select.data.find((data: any) => {
                if (
                  data.value ===
                  this.divisionService.selectedDivision[key]
                ) {
                  data.preSelected = true;
                }
              });
            }
          });
        }
      );
    }

    this.groupFunctionDivisionFormConfig =
      this.groupFunctionDivisionFormConfig.map(select => {
        if (select.data?.length < 1) {
          return {
            ...select,
            disabled: true,
          };
        } else {
          return select;
        }
      });
    this.cdr.detectChanges();
  }
}
