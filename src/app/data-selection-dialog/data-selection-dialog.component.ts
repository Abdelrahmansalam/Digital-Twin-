
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-data-selection-dialog',
  templateUrl: './data-selection-dialog.component.html',
  styleUrls: ['./data-selection-dialog.component.scss'],
})
export class DataSelectionDialogComponent implements OnInit {

  dataForm: FormGroup;
  dataOptions: string[] = ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5'];
  filteredData: Observable<string[]>;

  constructor(
    private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DataSelectionDialogComponent>
  ) {
    this.dataForm = this._formBuilder.group({
      dataControl: ['', Validators.required]
    });

    this.filteredData = this.dataForm.get('dataControl')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  ngOnInit(): void { }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.dataOptions.filter(option => option.toLowerCase().includes(filterValue));
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}






