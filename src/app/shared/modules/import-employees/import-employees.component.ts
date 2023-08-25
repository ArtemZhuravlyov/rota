import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ImportTableConfig } from '@core/types/import-table-config.interface';
import { TranslateKey } from '../../../../assets/i18n/enums/translate-key.enum';

@Component({
  selector: 'app-import-employees-type',
  templateUrl: './import-employees.component.html',
  styleUrls: ['./import-employees.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImportEmployeesComponent implements OnInit {
  title!: TranslateKey;
  tableConfig!: any;
  fileData: any;

  protected readonly UPLOAD_FILE = TranslateKey.UPLOAD_FILE;
  protected readonly PREVIEW_IMPORT = TranslateKey.PREVIEW_IMPORT;
  protected readonly MAP_FIELDS = TranslateKey.MAP_FIELDS;

  formGroupUploadFile = new FormGroup({
    file: new FormControl('', Validators.required),
  });
  formGroupMapping = new FormGroup({});

  formGroupResult = new FormGroup({});

  constructor(
    private router: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.init();
  }

  init(): void {
    const { title } = this.router.snapshot.data;
    const { tableConfig } = this.location.getState() as {
      tableConfig: ImportTableConfig;
    };
    this.title = title;
    this.tableConfig = tableConfig;
  }

  back(): void {}
}
