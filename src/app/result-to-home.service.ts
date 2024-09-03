import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultToHomeService {
  private componentSource = new Subject<string>();
  public componentObservable = this.componentSource.asObservable();

  changeComponent(component: string) {
    this.componentSource.next(component);
  }

  showDataResult() {
    this.componentSource.next('DataResult');
  }
}
