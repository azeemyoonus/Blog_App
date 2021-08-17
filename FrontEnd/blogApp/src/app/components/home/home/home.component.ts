import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: any;

  constructor(private postService: PostsService,
    private route: Router) { }
  ngOnInit(): void {
    this.getAllPosts()
  }

  getAllPosts() {
    this.postService.getAllPosts().subscribe((data: any) => {
      this.posts = data.response;
      console.log(this.posts)
    })
  }

  deletePost(id: string) {
    if(confirm("are you sure want to delete")){   
    this.postService.deletePost(id).subscribe(data => {
      this.getAllPosts()
    })
  }
  }


}
