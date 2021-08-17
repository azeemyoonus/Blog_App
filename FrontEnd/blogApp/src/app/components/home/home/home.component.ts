import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private postService :PostsService) { }
posts:any;
  ngOnInit(): void {
    this.getAllPosts()
  }
  getAllPosts(){
   this.postService.getAllPosts().subscribe((data)=>{
     console.log(data)
   })
    // console.log(this.posts);
  }
 
  
}
