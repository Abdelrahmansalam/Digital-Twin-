import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeviceService } from '../device.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-upload-dialog',
  templateUrl: './upload-dialog.component.html',
  styleUrls: ['./upload-dialog.component.scss']
})
export class UploadDialogComponent implements OnInit {
  uploadForm: FormGroup;
  fileName: string = '';
  selectedFile: File | null = null;

  @ViewChild('fileInput') fileInput!: ElementRef;

  constructor(
    private fb: FormBuilder, 
    private deviceService: DeviceService, 
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<UploadDialogComponent>  // Inject the MatDialogRef
  ) {
    this.uploadForm = this.fb.group({
      dataName: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onFileSelect(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.fileName = file.name;
      this.selectedFile = file;
    }
  }

  triggerFileSelect() {
    this.fileInput.nativeElement.click();
  }

  onSubmit(): void {
    if (this.uploadForm.valid && this.selectedFile) {
      const dataName = this.uploadForm.get('dataName')?.value;
      const file = this.selectedFile;

      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const jsonData = JSON.parse(e.target?.result as string);

          this.deviceService.uploadData(dataName, jsonData).subscribe(response => {
            console.log('Data uploaded successfully:', response);
            this.snackBar.open('Data uploaded successfully!', 'Close', {
              duration: 3000,
            });

            // Close the dialog when the data is uploaded successfully
            this.dialogRef.close();

          }, error => {
            console.error('Error uploading data:', error);
            this.snackBar.open('Error uploading data. Please try again!', 'Close', {
              duration: 5000,
              panelClass: ['mat-toolbar', 'mat-warn']
            });
          });
        } catch (err) {
          console.error('Error parsing JSON:', err);
          this.snackBar.open('Error parsing JSON. Please upload a valid JSON file!', 'Close', {
            duration: 5000,
            panelClass: ['mat-toolbar', 'mat-warn']
          });
        }
      };
      reader.readAsText(file);
    }
  }
}
