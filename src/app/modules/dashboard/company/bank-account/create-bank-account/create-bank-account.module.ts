import {NgModule} from "@angular/core";
import {
  CreateBankAccountComponent
} from "@app/modules/dashboard/company/bank-account/create-bank-account/create-bank-account.component";
import {CommonModule} from "@angular/common";
import {
  CreateGroupFunctionDivisionRoutingModule
} from "@app/modules/dashboard/company/group-function-division/create-group-function-division/create-group-function-division-routing.module";
import {PageHeaderModule} from "@shared/modules/page-header/page-header.module";
import {ButtonModule} from "@shared/modules/button/button.module";
import {FormCardModule} from "@shared/modules/form-card/form-card.module";
import {TranslateModule} from "@ngx-translate/core";
import {FormBuilderModule} from "@shared/modules/form-builder/form-builder.module";

@NgModule({
  declarations:[
    CreateBankAccountComponent
  ],
  imports:[
    CommonModule,
    CreateGroupFunctionDivisionRoutingModule,
    PageHeaderModule,
    ButtonModule,
    FormCardModule,
    TranslateModule,
    FormBuilderModule,
  ]
})
export class CreateBankAccountModule{}
