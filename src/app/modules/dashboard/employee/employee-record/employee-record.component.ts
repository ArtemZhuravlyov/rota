import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-employee-record',
  templateUrl: './employee-record.component.html',
  styleUrls: ['./employee-record.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeRecordComponent {

}
