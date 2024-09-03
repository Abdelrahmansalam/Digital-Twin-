import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-resultContent',
  templateUrl: './result-dialog.component.html',
  styleUrls: ['./result-dialog.component.scss'],
})



export class ResultDialogComponent {
  @Input() processId: number = 0;
  @Input() processName: string = '';
  @Input() processDescription: string = '';
  @Input() dataTypeUsed: string = '';
  @Input() numberOfIterations: number = 0;
  @Input() processDuration: string = '';
}