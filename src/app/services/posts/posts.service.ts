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

  getAllPosts() {
    return this.http.get(`http://localhost:3000/getAllPost`)
  }

  deletePost(id: string) {
    return this.http.delete(`http://localhost:3000/deletePost/${id}`);
  }
  
  editPost(id: string,post:any) {
    return this.http.put(`http://localhost:3000/editPost/${id}`,post);
  }

  getPostById(id:string){
    return this.http.get(`http://localhost:3000/post/${id}`)
  }

} 
