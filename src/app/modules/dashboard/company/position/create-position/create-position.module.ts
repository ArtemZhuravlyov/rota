import {NgModule} from "@angular/core";
import {
  CreatePositionComponent
} from "@app/modules/dashboard/company/position/create-position/create-position.component";
import {CommonModule} from "@angular/common";
import {
  CreatePositionRoutingModule
} from "@app/modules/dashboard/company/position/create-position/create-position-routing.module";
import {FormCardModule} from "@shared/modules/form-card/form-card.module";
import {ButtonModule} from "@shared/modules/button/button.module";
import {TranslateModule} from "@ngx-translate/core";
import {PageHeaderModule} from "@shared/modules/page-header/page-header.module";
import {FormBuilderModule} from "@shared/modules/form-builder/form-builder.module";

@NgModule({
  declarations:[
    CreatePositionComponent
  ],
  imports: [
    CommonModule,
    CreatePositionRoutingModule,
    FormCardModule,
    ButtonModule,
    TranslateModule,
    PageHeaderModule,
    FormBuilderModule
  ]
})
export class CreatePositionModule {}
