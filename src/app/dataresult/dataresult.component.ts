import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../device.service';
import plantumlEncoder from 'plantuml-encoder';

@Component({
  selector: 'app-dataresult',
  templateUrl: './dataresult.component.html',
  styleUrls: ['./dataresult.component.scss']
})
export class DataresultComponent implements OnInit {
  dataName = '';
  deviceId = '';  
  diagramUrl: string | null = null;
  jsonData: any = null;  // For storing and visualizing JSON data

  constructor(private deviceService: DeviceService) {
    this.deviceService.getSelectedDevice().subscribe(device => {
      if (device) {
        console.log("Selected device ID:", device.id);
        this.deviceId = device.id;
        this.dataName = device.name;
      }
    });
  }
  
  ngOnInit(): void {
    this.deviceService.getDeviceDataById(this.deviceId)
      .subscribe(response => {
        if (response && response.data) {
          this.jsonData = response.data; // Assign data for future use
          this.generateUML(); // Convert the data to UML and set the URL
        }
      }, error => {
        console.error('Error fetching device data:', error);
      });
  }

  generateUML(): void {
    const uml = this.convertJsonToUML(this.jsonData);
    console.log("Generated UML:", uml);  // Log this
    const encoded = plantumlEncoder.encode(uml);
    this.diagramUrl = `http://www.plantuml.com/plantuml/png/${encoded}`;
 }

 convertJsonToUML(data: any): string {
  let uml = '@startjson\n';

  // Adding the JSON data as a string
  uml += JSON.stringify(data, null, 2);  // Format the JSON with 2-space indentation

  uml += '\n@endjson';
  return uml;
}

downloadData(): void {
  const blob = new Blob([JSON.stringify(this.jsonData, null, 2)], { type: 'application/json' });
  const url = window.URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = `${this.dataName}.json`;
  anchor.click();
  window.URL.revokeObjectURL(url);
}

downloadGraph(): void {
  if (!this.diagramUrl) {
      console.error('Diagram URL not available');
      return;
  }

  fetch(this.diagramUrl)
    .then(response => response.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.href = url;
      anchor.setAttribute('download', `${this.dataName}.png`);
      anchor.click();
      window.URL.revokeObjectURL(url);
    })
    .catch(error => {
      console.error('Error downloading the graph:', error);
    });
}


}
