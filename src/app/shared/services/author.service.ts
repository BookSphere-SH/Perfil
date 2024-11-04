import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private apiUrl = 'https://my-json-server.typicode.com/BookSphere-SH/DB_Romero/authors';

  constructor(private http: HttpClient) {}
  // Fetch all users

  getAuthors(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Fetch user by ID (for profile page)
  getAuthorById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Register a new user
  registerAuthor(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }

  // Update user profile
  updateAuthor(id: number, user: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, user);
  }
}

