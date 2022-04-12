import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,) {

  }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  login(data: {}) {
    return this.http.post(`http://localhost:3000/login`, data)
    .pipe(
      catchError((err)=>{
        console.log(err);
        return err
      })
    );
    
  }
}
