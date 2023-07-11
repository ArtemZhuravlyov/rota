import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EngagementRoutingModule } from '@app/modules/dashboard/engagement/engagement-routing.module';
import { EngagementComponent } from './engagement.component';
import { SubMenuButtonModule } from '@shared/modules/sub-menu-button/sub-menu-button.module';
import { SubMenuModule } from '@shared/modules/sub-menu/sub-menu.module';



@NgModule({
  declarations: [
    EngagementComponent
  ],
  imports: [
    CommonModule,
    EngagementRoutingModule,
    SubMenuButtonModule,
    SubMenuModule
  ]
})
export class EngagementModule { }
