import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { UserRegisterRequest } from '../models/UserRegisterRequest';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly apiUrl = environment.apiUrl;
  private token: any;
  private loggedInUsername: any;
  private jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient) { }

  
  public register(user: UserRegisterRequest): Observable<UserRegisterRequest> {
    return this.http.post<UserRegisterRequest>(`${this.apiUrl}/api/v1/auth/register`, user)
  }
}
