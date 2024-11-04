import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://my-json-server.typicode.com/BookSphere-SH/DB_Romero/users';

  constructor(private http: HttpClient) {}

  // Fetch all users
  getUsers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Fetch user by ID (for profile page)
  getUserById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Register a new user
  registerUser(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }

  // Update user profile
  updateUser(id: number, user: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, user);
  }
}
