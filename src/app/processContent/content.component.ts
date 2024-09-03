import { Component , OnInit } from '@angular/core';
import { ResultToHomeService } from '../result-to-home.service';
import { DeviceService } from '../device.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  devices: any[] = [];
  allCommands: any[] = [];

  constructor(private resultToHomeService: ResultToHomeService, private deviceService: DeviceService) {}

  ngOnInit(): void {
    this.loadDevices();
  }

  loadDevices(): void {
    this.deviceService.getDevices().subscribe(data => {
      this.devices = data;
      this.devices.forEach(device => {
        this.loadDeviceCommands(device.id);
      });
    });
  }

  loadDeviceCommands(deviceId: string): void {
    this.deviceService.getDeviceCommands(deviceId).subscribe(commandsForDevice => {
      this.allCommands.push(...commandsForDevice); // Spread the commands to push them individually into the allCommands array
    });
  }

  onViewResultClick(): void {
    this.resultToHomeService.changeComponent('Result');
  }
}
