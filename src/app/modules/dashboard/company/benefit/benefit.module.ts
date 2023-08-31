import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BenefitRoutingModule } from './benefit-routing.module';
import { BenefitComponent } from './benefit.component';
import { PageHeaderModule } from '@shared/modules/page-header/page-header.module';
import { ButtonModule } from '@shared/modules/button/button.module';
import { DataTableModule } from '@shared/modules/data-table/data-table.module';
import { BenefitService } from '@modules/dashboard/company/benefit/benefit.service';
import { NewBenefitComponent } from './new-benefit/new-benefit.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [BenefitComponent, NewBenefitComponent],
  providers: [BenefitService],
  imports: [
    CommonModule,
    BenefitRoutingModule,
    PageHeaderModule,
    ButtonModule,
    DataTableModule,
    MatProgressSpinnerModule,
  ],
})
export class BenefitModule {}
