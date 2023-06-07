import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportEmployeesComponent } from './import-employees.component';
import { PageHeaderModule } from "@shared/modules/page-header/page-header.module";
import { ButtonModule } from "@shared/modules/button/button.module";
import { MaterialModule } from "@shared/modules/material.module";
import { TranslateModule } from "@ngx-translate/core";
import { StepUploadFileComponent } from "@shared/modules/import-employees/step-upload-file/step-upload-file.component";
import { ReactiveFormsModule } from "@angular/forms";
import {
  StepFieldsMappingComponent
} from "@shared/modules/import-employees/step-fields-mapping/step-fields-mapping.component";
import { StepPreviewComponent } from "@shared/modules/import-employees/step-preview/step-preview.component";
import { HeaderContentModule } from "@shared/modules/header-content/header-content.module";
import { DropdownModule } from "@shared/modules/dropdown/dropdown.module";
import { ProgressSpinnerModule } from "@shared/modules/progress-spinner/progress-spinner.module";



@NgModule({
  declarations: [
    ImportEmployeesComponent,
    StepUploadFileComponent,
    StepFieldsMappingComponent,
    StepPreviewComponent,
  ],
  imports: [
    CommonModule,
    PageHeaderModule,
    ButtonModule,
    MaterialModule,
    TranslateModule,
    ReactiveFormsModule,
    HeaderContentModule,
    DropdownModule,
    ProgressSpinnerModule,
  ]
})
export class ImportEmployeesModule { }
