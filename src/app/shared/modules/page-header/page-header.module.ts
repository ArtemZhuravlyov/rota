import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './page-header.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { MaterialModule } from '../material.module';
import { PageSubHeaderComponent } from './page-sub-header/page-sub-header.component';
import { ButtonModule } from '../button/button.module';
import { SwitchBarComponent } from '@shared/components/switch-bar/switch-bar.component';

@NgModule({
  declarations: [PageHeaderComponent, PageSubHeaderComponent],
  exports: [PageHeaderComponent, PageSubHeaderComponent],
  imports: [
    CommonModule,
    TranslateModule,
    RouterLink,
    MaterialModule,
    ButtonModule,
    SwitchBarComponent,
  ],
})
export class PageHeaderModule {}
