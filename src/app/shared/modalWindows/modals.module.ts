import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeCompanyModalComponent } from '@shared/modalWindows/change-company-modal/change-company-modal.component';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '@shared/modules/material.module';
import { FormBuilderModule } from '@shared/modules/form-builder/form-builder.module';
import { ButtonModule } from '@shared/modules/button/button.module';
import { RouterLink } from '@angular/router';
import { ShareWithModalComponent } from './share-with-modal/share-with-modal.component';
import { SearchInputModule } from '@shared/modules/search-input/search-input.module';

@NgModule({
  declarations: [
    ChangeCompanyModalComponent,
    ShareWithModalComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    MaterialModule,
    FormBuilderModule,
    ButtonModule,
    RouterLink,
    SearchInputModule,
  ],
})
export class ModalsModule {}
