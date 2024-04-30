import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectService {
  private optionSource = new BehaviorSubject<string>('');
  currentOption = this.optionSource.asObservable();

  constructor() { }

  changeOption(option: string) {
    this.optionSource.next(option);
  }
}
