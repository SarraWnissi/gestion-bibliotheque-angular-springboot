import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from './login/login';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Service {
  constructor(private http: HttpClient) {}
  getCategories() {
    return this.http.get('http://localhost:8080/categories');
  }
  getLivres(id: number) {
    return this.http.get('http://localhost:8080/Livres/' + id);
  }

  ajoutLivre(lv: any) {
    return this.http.get('http://localhost:8080/addLivre', lv);
  }
  deleteLivre(id: number) {
    return this.http.get('http://localhost:8080/deleteLivre/' + id);
  }

  Login(username: string, password: string): Observable<boolean> {
    if (username === 'ali' && password ==='admin') {
      localStorage.setItem('user', 'ali');
      return of(true); //traja3 true
    } else {
      return of(false);
    }
  }
  isConnected(): boolean {
    return localStorage.getItem('user') !== null;
  }

  logout() {
    localStorage.removeItem('user');
  }
}
