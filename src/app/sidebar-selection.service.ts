import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarSelectionService {
  private selectedComponentSubject: BehaviorSubject<string> = new BehaviorSubject<string>('component1');

  setSelectedComponent(componentName: string): void {
    this.selectedComponentSubject.next(componentName);
  }

  getSelectedComponent(): Observable<string> {
    return this.selectedComponentSubject.asObservable();
  }
}
