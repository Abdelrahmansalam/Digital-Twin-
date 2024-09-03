import { Component, OnInit, HostListener } from '@angular/core';
import { SidebarSelectionService } from '../sidebar-selection.service';
import { Subscription } from 'rxjs';
import { MatDrawerMode } from '@angular/material/sidenav';
import { ResultToHomeService } from '../result-to-home.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        'transform': 'translateY(0)', 'opacity': '1', 'visibility': 'visible'
      })),
      state('out', style({
        'transform': 'translateY(100%)', 'opacity': '0', 'visibility': 'hidden'
      })),
      transition('in => out', [animate('600ms ease-in-out')]),
      transition('out => in', [animate('600ms ease-in-out')])
    ])
  ]

})
export class HomeComponent implements OnInit {
  selectedComponent: string = '';
  sidenavMode: MatDrawerMode = 'side'; 
  showSidebar: boolean = false; 
  showUserMenu = false; // Add this line


  constructor(
    private sidebarSelectionService: SidebarSelectionService,
    private resultToHomeService: ResultToHomeService // Add the private access modifier
  ) {
    this.onResize(window.innerWidth);
  }

  ngOnInit(): void {
    this.sidebarSelectionService.getSelectedComponent().subscribe((component: string) => {
      this.selectedComponent = component;
    });
  
    // Subscribe to component changes from ResultToHomeService
    this.resultToHomeService.componentObservable.subscribe((component: string) => {
      this.selectedComponent = component;
    });
  }
  onViewResultClick(): void {
    // Set the selectedComponent to 'Result'
    this.selectedComponent = 'Result';
    this.resultToHomeService.changeComponent('Result');
  }
    // Function to show the DataResult component when the button is clicked


  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number) {
    if (width < 600) {
      this.sidenavMode = 'over';
    } else {
      this.sidenavMode = 'side';
    }
  }
}
