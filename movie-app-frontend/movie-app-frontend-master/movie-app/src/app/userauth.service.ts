import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDetails } from './Model/User';

@Injectable({
  providedIn: 'root',
})
export class UserauthService {
  constructor(private http: HttpClient) {}

  registerUser(user: any) {
    return this.http.post('http://localhost:9002/api/v2/register', user);
  }

  loginUser(user: UserDetails) {
    return this.http.post('http://localhost:9002/api/v1/login', user);
  }
}



