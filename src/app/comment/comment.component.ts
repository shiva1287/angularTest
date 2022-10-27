import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommentService } from '../comment.service';
import { Comment } from '../models/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  comments: Comment[];
  subscription1: Subscription;
  subscription2: Subscription;
  subscription3: Subscription;
  allSubscriptions:Subscription[];

  constructor(private commentService: CommentService) {
    this.comments = [];
    this.subscription1 = new Subscription();
    this.subscription2 = new Subscription();
    this.subscription3 = new Subscription();
    this.allSubscriptions = [];
  }

  ngOnInit(): void {

    this.subscription1 = this.commentService.getAllComments().subscribe((response) => {
      // this.comments = response;
      response.forEach(res=>{
        const commentObj = new Comment(res.postId,res.id,res.name,res.email,res.body)
        this.comments.push(commentObj)
      })
    });

   this.allSubscriptions.push( this.subscription1);

  }

  ngOnDestroy(){
    this.allSubscriptions.forEach(ele=>ele.unsubscribe());
  }
}
