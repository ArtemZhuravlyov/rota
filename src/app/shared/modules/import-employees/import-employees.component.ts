import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-import-employees',
  templateUrl: './import-employees.component.html',
  styleUrls: ['./import-employees.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImportEmployeesComponent {
  title = (this.router.snapshot.data as { breadcrumb: string }).breadcrumb;

  formGroupUploadFile = new FormGroup({
    file: new FormControl('', Validators.required),
  })
  formGroupMapping = new FormGroup({
    file: new FormControl('', Validators.required),
  })
  formGroupResult = new FormGroup({
    file: new FormControl('', Validators.required),
  })

  constructor(private router: ActivatedRoute) { }
  back(): void {

  }

  fileData: any;
}
