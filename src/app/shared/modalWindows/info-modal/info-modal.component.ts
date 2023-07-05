import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ButtonTypeEnum} from "@core/enums/button-type.enum";

export interface InfoModal {
  title: string,
  titleDescription: string,
  description: string
}
@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoModalComponent{

  protected readonly ButtonTypeEnum = ButtonTypeEnum;

  constructor(
    public dialogRef: MatDialogRef<InfoModalComponent>,
    @Inject(MAT_DIALOG_DATA) protected data: InfoModal
  ) {}

  closeModal(): void {
    this.dialogRef.close();
  }

}
