import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost/login';

  constructor(private http: HttpClient) { }

  login(adminID: string, adminPass: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { adminID, adminPass });
  }
}
