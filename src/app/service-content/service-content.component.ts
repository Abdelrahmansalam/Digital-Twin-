import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DataSelectionDialogComponent } from '../data-selection-dialog/data-selection-dialog.component';

@Component({
  selector: 'app-service-content',
  templateUrl: './service-content.component.html',
  styleUrls: ['./service-content.component.scss']
})
export class ServiceContentComponent {
  constructor(private dialog: MatDialog) {}

  openDataSelectionDialog(): void {
    const dialogConfig: MatDialogConfig = {
      width: '500px', // Set the width of the dialog
      maxHeight: '90vh', // Set the maximum height of the dialog (90% of the viewport height)
    };

    const dialogRef = this.dialog.open(DataSelectionDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((selectedData) => {
      if (selectedData) {
        // Handle the selectedData here (data that was added)
      }
    });
  }
}
