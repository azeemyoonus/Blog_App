import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  addPost(data: {}) {
    return this.http.post(`http://localhost:3000/addPost`, data)
  }
}
