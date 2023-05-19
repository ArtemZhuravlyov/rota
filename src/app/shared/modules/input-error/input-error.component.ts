import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-error',
  templateUrl: './input-error.component.html',
  styleUrls: ['./input-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputErrorComponent {
  @Input() errors!: Record<string, boolean | string>;

  hasOwnPropertyInError(key: string): boolean {
    return Object(this.errors).hasOwnProperty(key);
  }
}
