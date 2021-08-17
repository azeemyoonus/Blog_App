import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts:any;

  constructor(private postService :PostsService) { }
  ngOnInit(): void {
    this.getAllPosts()
    console.log("this",this.posts)
  }
  getAllPosts(){
   this.postService.getAllPosts().subscribe((data: any)=>{
     this.posts=data.response;
     console.log(this.posts)
   })
    // console.log(this.posts);
  }
 
  
}
