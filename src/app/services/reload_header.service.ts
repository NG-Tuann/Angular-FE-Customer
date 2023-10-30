import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReloadheaderService {

  // Subject để phát sự kiện
  private eventSubject: Subject<any> = new Subject<any>();

  // Phương thức để phát sự kiện từ component A (detail)
  emitEvent(eventData: any) {
    this.eventSubject.next(eventData);
  }

  // Phương thức để lắng nghe sự kiện từ component B (app-header)
  onEvent(): Observable<any> {
    return this.eventSubject.asObservable();
  }
}
