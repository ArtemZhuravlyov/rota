import {
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  HostBinding,
  Input,
  Renderer2,
  ViewContainerRef,
} from '@angular/core';
import { RsSpinnerComponent } from '@shared/components/rs-spinner/rs-spinner.component';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { isNil } from 'lodash';

@Directive({
  selector: '[rsSpinner]',
})
export class RsSpinnerDirective {
  private shouldShow = false;
  spinner!: ComponentRef<RsSpinnerComponent>;
  componentFactory!: ComponentFactory<RsSpinnerComponent>;

  @Input('rsSpinnerMode') mode: ProgressSpinnerMode = 'indeterminate';

  @Input('rsSpinnerDiameter') diameter = 50;

  @Input()
  set rsSpinner(val: boolean) {
    if (this.componentFactory) {
      if (val) {
        this.show();
      } else {
        this.hide();
      }
    } else {
      this.shouldShow = val;
    }
  }

  @HostBinding('class.nb-rs-spinner-container') isSpinnerExist =
    false;

  constructor(
    private directiveView: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private renderer: Renderer2,
    private directiveElement: ElementRef
  ) {}

  ngOnInit() {
    this.componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(
        RsSpinnerComponent
      );
    if (this.shouldShow) {
      this.show();
    }
  }

  hide() {
    if (this.isSpinnerExist) {
      this.directiveView.remove();
      this.isSpinnerExist = false;
    }
  }

  show() {
    if (!this.isSpinnerExist) {
      this.spinner =
        this.directiveView.createComponent<RsSpinnerComponent>(
          this.componentFactory
        );
      this.setInstanceInputs(this.spinner.instance);
      this.spinner.changeDetectorRef.detectChanges();
      this.renderer.appendChild(
        this.directiveElement.nativeElement,
        this.spinner.location.nativeElement
      );
      this.isSpinnerExist = true;
    }
  }

  setInstanceInputs(instance: RsSpinnerComponent) {
    !isNil(this.mode) && (instance.mode = this.mode);
    !isNil(this.diameter) && (instance.diameter = this.diameter);
  }
}
