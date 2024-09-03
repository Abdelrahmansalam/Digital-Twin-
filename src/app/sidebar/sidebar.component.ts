import { Component } from '@angular/core';
import { SidebarSelectionService } from '../sidebar-selection.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  selectedOption = '';

  shouldShowCheckboxes(): boolean {
    return this.selectedOption === 'Process'; 
  }

  currentDate: string;

  constructor(private sidebarSelectionService: SidebarSelectionService) {
    this.currentDate = this.getCurrentDate();
  }

  getCurrentDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  selectComponent(componentName: string): void {
    this.sidebarSelectionService.setSelectedComponent(componentName);
    this.selectedOption = componentName;
  }

  onButtonClick(value: string): void {
    this.selectComponent(value.toLowerCase());
  }
}
