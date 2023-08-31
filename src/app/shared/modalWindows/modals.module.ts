import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeCompanyModalComponent } from "@shared/modalWindows/change-company-modal/change-company-modal.component";
import { TranslateModule } from "@ngx-translate/core";
import { MaterialModule } from "@shared/modules/material.module";
import { FormBuilderModule } from "@shared/modules/form-builder/form-builder.module";
import { ButtonModule } from "@shared/modules/button/button.module";
import { RouterLink } from "@angular/router";


@NgModule({
  declarations: [ChangeCompanyModalComponent],
  imports: [
    CommonModule,
    TranslateModule,
    MaterialModule,
    FormBuilderModule,
    ButtonModule,
    RouterLink,
  ]
})
export class ModalsModule { }
