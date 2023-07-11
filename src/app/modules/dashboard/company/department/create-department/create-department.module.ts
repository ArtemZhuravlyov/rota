import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {
  CreateDepartmentRoutingModule
} from "@app/modules/dashboard/company/department/create-department/create-department-routing.module";
import {
  CreateDepartmentComponent
} from "@app/modules/dashboard/company/department/create-department/create-department.component";
import {FormCardModule} from "@shared/modules/form-card/form-card.module";
import {ButtonModule} from "@shared/modules/button/button.module";
import {TranslateModule} from "@ngx-translate/core";
import {FormBuilderModule} from "@shared/modules/form-builder/form-builder.module";
import {PageHeaderModule} from "@shared/modules/page-header/page-header.module";

@NgModule({
  declarations: [
    CreateDepartmentComponent
  ],
  imports: [
    CommonModule,
    CreateDepartmentRoutingModule,
    FormCardModule,
    ButtonModule,
    TranslateModule,
    FormBuilderModule,
    PageHeaderModule
  ]
})
export class CreateDepartmentModule { }
