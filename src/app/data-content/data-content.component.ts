import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UploadDialogComponent } from '../upload-dialog/upload-dialog.component';
import { ResultToHomeService } from '../result-to-home.service'; 
import { DeviceService } from '../device.service';
import{SelectedDevice} from '../device.service';
@Component({
  selector: 'app-data-content',
  templateUrl: './data-content.component.html',
  styleUrls: ['./data-content.component.scss']
})
export class DataContentComponent implements OnInit {

  devices: any[] = [];

  constructor(
    private dialog: MatDialog,
    private resultToHomeService: ResultToHomeService,
    private deviceService: DeviceService
  ) {}

  ngOnInit(): void {
    this.loadDevices();
  }

  loadDevices(): void {
    this.deviceService.getDevices().subscribe(data => {
    this.devices = data.filter((device: any) => device.deviceTypeId === 9);
    },
    error => {
      console.error("Error fetching devices:", error);
    });
  }

  openUploadDialog(): void {
    const dialogRef = this.dialog.open(UploadDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      // Handle any actions after the dialog is closed (if needed)
    });
  }

  showDataResult(device: SelectedDevice): void {
    this.deviceService.setSelectedDevice(device);
    this.resultToHomeService.showDataResult();
  }
  
  

  // Add methods to handle Edit, Delete, and Show Commands (if required)
}
