import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateEmployeeTypeRoutingModule } from './create-employee-type-routing.module';
import { CreateEmployeeTypeComponent } from './create-employee-type.component';
import { PageHeaderModule } from '@shared/modules/page-header/page-header.module';
import { FormCardModule } from '@shared/modules/form-card/form-card.module';
import { FormBuilderModule } from '@shared/modules/form-builder/form-builder.module';
import { ButtonModule } from '@shared/modules/button/button.module';
import { TranslateModule } from '@ngx-translate/core';
import { FormComponent } from '@shared/components/form/form.component';

@NgModule({
  declarations: [CreateEmployeeTypeComponent],
  imports: [
    CommonModule,
    CreateEmployeeTypeRoutingModule,
    PageHeaderModule,
    FormCardModule,
    FormBuilderModule,
    ButtonModule,
    TranslateModule,
    FormComponent,
  ],
})
export class CreateEmployeeTypeModule {}
