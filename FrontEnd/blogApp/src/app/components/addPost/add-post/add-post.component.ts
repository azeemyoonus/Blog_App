import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from 'src/app/services/posts/posts.service';
PostsService
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  constructor(private postService: PostsService) { }

  ngOnInit(): void {
  }

  addpost(addpostForm : NgForm){
    console.log(addpostForm.value);
    this.postService.addPost(addpostForm.value).subscribe((data)=>{
      console.log(data);
      
    })
  }
}
