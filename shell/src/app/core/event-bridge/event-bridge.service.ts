import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventBridgeService {

  public landscapeDataSubject = new BehaviorSubject<any>({});

  constructor() { }
}
