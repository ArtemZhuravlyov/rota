import {
  ChangeDetectionStrategy,
  Component, ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-menu-toggle',
  templateUrl: './menu-toggle.component.html',
  styleUrls: ['./menu-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuToggleComponent {
  @Input() set expandedState(value: boolean) {
    this.isExpanded = value;
  }
  @Input() height: string = '100%';
  @Output() onToggle: EventEmitter<boolean> = new EventEmitter<boolean>();
  isExpanded = true;
  showToggle = true;

  @HostListener('mouseover', ['$event']) onHover(e: MouseEvent) {
    this.showToggle = false;
  }

  @HostListener('mouseleave', ['$event']) onLeave(e: MouseEvent) {
    this.showToggle = true;
  }
  toggleSideMenu(): void {
    this.isExpanded = !this.isExpanded;
    this.onToggle.emit(this.isExpanded);
  }
}
