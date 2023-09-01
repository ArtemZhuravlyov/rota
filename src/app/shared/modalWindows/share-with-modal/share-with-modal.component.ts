import {
  ChangeDetectionStrategy,
  Component,
  Inject,
} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { InfoModal } from '@shared/modalWindows/info-modal/info-modal.component';
import { ButtonTypeEnum } from '@core/enums/button-type.enum';

@Component({
  selector: 'app-share-with-modal',
  templateUrl: './share-with-modal.component.html',
  styleUrls: ['./share-with-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShareWithModalComponent {
  protected readonly ButtonTypeEnum = ButtonTypeEnum;
  users$: any = [];

  constructor(
    public dialogRef: MatDialogRef<ShareWithModalComponent>,
    @Inject(MAT_DIALOG_DATA) protected data: InfoModal
  ) {}

  closeModal(): void {
    this.dialogRef.close();
  }

  filterTabs($event: any) {}

  ngOnInit() {
    //todo get users list
    console.log('Get users');
  }
}
