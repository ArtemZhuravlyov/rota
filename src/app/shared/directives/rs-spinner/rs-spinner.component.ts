import { Component, Input } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'rs-spinner',
  template: '<mat-spinner [mode]="mode" [diameter]="diameter" />',
  styleUrls: ['./rs-spinner.component.scss'],
})
export class RsSpinnerComponent {
  @Input() diameter = 50;

  @Input()
  mode: ProgressSpinnerMode = 'indeterminate';
}
