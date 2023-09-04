import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApprovalService {
  currentValue = new BehaviorSubject<{
    id?: string;
    name?: string;
    description?: string;
  }>({ id: '', name: '', description: '' });

  updateValue(payload: {
    id?: string;
    name?: string;
    description?: string;
  }) {
    this.currentValue.next(payload);
  }
}
