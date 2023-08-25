import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { positionFormConfig } from '@app/modules/dashboard/company/position/configs/positionForm.config';
import { PositionService } from '@core/services/company/position/position.service';
import { FormGroup } from '@angular/forms';
import { combineLatest, map, tap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateKey } from '../../../../../../assets/i18n/enums/translate-key.enum';

@Component({
  selector: 'app-create-position',
  templateUrl: './create-position.component.html',
  styleUrls: ['./create-position.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreatePositionComponent implements OnInit {
  protected readonly ADD_POSITION = TranslateKey.ADD_POSITION;

  positionFormConfig = positionFormConfig;
  protected readonly NavigationPaths = NavigationPaths;

  jobFamilyList$ = this.positionService.getJobFamilyList(999, 0).pipe(
    map((obj: any) => {
      if (obj === null) {
        return {};
      } else {
        return obj.jobFamilies;
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
  combinedJobsAndPositions$ = combineLatest([
    this.jobFamilyList$,
    this.positions$,
  ]);

  jobFamily = [] as any;
  jobProfiles = [] as any;
  positions = [] as any;
  selectedGradeCategoryId!: string;
  form!: FormGroup;

  constructor(
    private readonly positionService: PositionService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.combinedJobsAndPositions$.subscribe(
      ([jobFamilies, positions]) => {
        (this.jobFamily = jobFamilies),
          (this.positions = positions),
          this.addDataToForm();
      }
    );
  }

  addPosition(form: FormGroup) {
    if (this.positionService.action === 'view') {
      this.positionService
        .editPosition(
          this.positionService.selectedPosition.id,
          form.getRawValue()
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
      this.positionService
        .createPosition(form.getRawValue())
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
    let jobFamily = [] as any[];
    let positions = [] as any[];
    if (this.jobFamily?.length) {
      jobFamily = this.jobFamily.map((category: any) => ({
        displayName: category.name,
        value: category.id,
      }));
    }
    if (this.positions?.length) {
      positions = this.positions.map((position: any) => ({
        displayName: position.name,
        value: position.id,
      }));
    }
    this.positionFormConfig.find(r => {
      if (r.key == 'jobFamilyId') {
        r.data = jobFamily;
      }
      if (
        r.key == 'directReportingLineId' ||
        r.key == 'functionalReportingLineId'
      ) {
        r.data = positions;
      }
    });
    if (Object.keys(this.positionService.selectedPosition).length) {
      Object.keys(this.positionService.selectedPosition).forEach(
        (key: any) => {
          if (this.form.controls[key]) {
            this.form.controls[key].setValue(
              this.positionService.selectedPosition[key]
            );
          }
          this.positionFormConfig.forEach(select => {
            if (select.data) {
              select.data.find((data: any) => {
                if (
                  data.value ===
                  this.positionService.selectedPosition[key]
                ) {
                  data.preSelected = true;
                  console.log(this.positionFormConfig);
                }
              });
            }
          });
        }
      );
    }
    this.positionFormConfig = this.positionFormConfig.map(select => {
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

  formValueChanged(formValue: any) {
    if (formValue.key == 'jobFamilyId') {
      this.positionService
        .getJobProfileList(formValue.value)
        .subscribe(jobProfiles => {
          (this.jobProfiles = jobProfiles.map((level: any) => ({
            displayName: level.name,
            value: level.id,
          }))),
            this.positionFormConfig.find(r => {
              if (r.key == 'jobProfileId') {
                r.data = this.jobProfiles;
                r.disabled = false;
              }
            });
          this.cdr.detectChanges();
        });
    }
  }
}
