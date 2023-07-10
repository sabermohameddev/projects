import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'http://localhost:3000/users';
  localStorageKey = 'currentUser';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<boolean> {
    return this.http.get<User[]>(this.apiUrl).pipe(
      map((users: User[]) => {
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
          // Store user details in local storage
          localStorage.setItem(this.localStorageKey, JSON.stringify(user));
          return true;
        } else {
          return false;
        }
      })
    );
  }

  getCurrentUser(): User | null {
    const userStr = localStorage.getItem(this.localStorageKey);
    if (userStr) {
      return JSON.parse(userStr);
    }
    return null;
  }

  logout(): void {
    // Clear user details from local storage
    localStorage.removeItem(this.localStorageKey);
  }
}
