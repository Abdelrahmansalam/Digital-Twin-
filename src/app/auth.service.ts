import { HttpClient } from '@angular/common/http';
import { outputAst } from '@angular/compiler';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData =null ;

  constructor( private _HttpClient:HttpClient) { }

  decodeUserData(){
  let encodedToken = JSON.stringify(  localStorage.getItem('userToken'));
  let decodedToken:any= jwtDecode(encodedToken)
  this.userData = decodedToken;
  
  }
  headers = {
    Authorization: 'Bearer ' + localStorage.getItem('userToken')
  };
  creatUser(userdata:object):Observable<any>
  {
    return this._HttpClient.post('http://localhost:80/api/rest/user',userdata , {
      headers:this.headers
    })
  }
  login(userdata:object):Observable<any>
  {
    return this._HttpClient.post('http://localhost:80/auth/rest/token',userdata)
  }
}
