import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {Location} from "@angular/common";
import {ImportTableConfig} from "@core/types/import-table-config.interface";

@Component({
  selector: 'app-import-employees',
  templateUrl: './import-employees.component.html',
  styleUrls: ['./import-employees.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImportEmployeesComponent implements OnInit {
  title!: string
  tableConfig!: any;
  fileData: any;

  formGroupUploadFile = new FormGroup({
    file: new FormControl('', Validators.required),
  });
  formGroupMapping = new FormGroup({});

  formGroupResult = new FormGroup({});

  constructor(private router: ActivatedRoute, private location: Location) {  }

  ngOnInit() {
    this.init();
  }

  init(): void {
    const { title } = this.router.snapshot.data;
    const { tableConfig } = (this.location.getState() as { tableConfig: ImportTableConfig });
    this.title = title;
    this.tableConfig = tableConfig;
  }

  back(): void {

  }
}
