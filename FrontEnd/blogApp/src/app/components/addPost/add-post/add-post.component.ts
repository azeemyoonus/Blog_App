import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts/posts.service';
import { post } from '../../home/home/home.component';
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  constructor(private postService: PostsService,
    private route: Router,
    private router: ActivatedRoute) { }


  id: string = '';
  Post: post =new post;


  ngOnInit(): void {
    console.log("calling here")
    this.id = this.router.snapshot.params['id'];
    if (this.id) {
      this.postService.getPostById(this.id).subscribe((data: any) => {
        this.Post = data.response;
      })
    }
  }

  addpost(addpostForm: NgForm) {   
    if (this.id ) {     
      this.postService.editPost(this.id,this.Post).subscribe((data:any)=>{
        console.log(data);
        this.route.navigate(['home']);
      })
    } else  {               
      this.postService.addPost(addpostForm.value).subscribe((data) => {
        console.log(data);
        this.route.navigate(['home']);
      })
    }
  }
}
