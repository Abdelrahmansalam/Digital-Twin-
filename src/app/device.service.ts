import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

export interface SelectedDevice {
  id: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private baseUrl: string = 'http://localhost:80/api/rest';
  private baseUrl2 = 'http://localhost:80/api/rest/device';
  private selectedDevice = new BehaviorSubject<SelectedDevice | null>(null);

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('userToken')
    });
  }

  getDevices(): Observable<any> {
    return this.http.get(`${this.baseUrl}/device?take=20&skip=0`, { headers: this.getAuthHeaders() });
  }

  getDeviceCommands(deviceId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/device/${deviceId}/command?sortField=timestamp&take=100&skip=0`, { headers: this.getAuthHeaders() });
  }

  fetchDevices(take: number, skip: number): Observable<any> {
    return this.http.get(`${this.baseUrl2}?take=${take}&skip=${skip}`, { headers: this.getAuthHeaders() });
  }

  getDeviceDataById(deviceId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/device/${deviceId}`, { headers: this.getAuthHeaders() });
  }

  setSelectedDevice(device: SelectedDevice): void {
    this.selectedDevice.next(device);
  }

  getSelectedDevice(): Observable<SelectedDevice | null> {
    return this.selectedDevice.asObservable();
  }
  generateRandomId(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  uploadData(name: string, data: any): Observable<any> {
    const randomId = this.generateRandomId(32); // 32 is the length of your ID
    const endpoint = `${this.baseUrl}/device/${randomId}`;
    const payload = {
      name: name,
      data: data
    };
  
    const headers = {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJwYXlsb2FkIjp7ImEiOlswXSwiZSI6MTczODI3ODAwMDAwMCwidCI6MSwidSI6MSwibiI6WyIqIl0sImR0IjpbIioiXX19._FtqByNI8jY1OEeMdO-dRrZbioezqBetn8Dd_qLnAHY'
    };
  
    return this.http.put(endpoint, payload, { headers: headers });
  }
}
