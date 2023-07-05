import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PrintService{
  isPrinting$ = new BehaviorSubject<boolean>(false);
  constructor() { }

}
