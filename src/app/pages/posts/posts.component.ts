import { Component, OnInit, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

import { PostService } from 'src/app/entities/posts/posts.service';
import { Posts } from 'src/app/entities/posts/posts.model';

import { TitleService } from 'src/app/util/message-emmiter.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  title: string = "POSTS";
  postSubscription: Subscription;
  posts: Posts[] = [];
  visible = -1;
  page: number = 1;
  isFetching = false;
  postCreated: boolean = false;
  postDeleted: boolean = false;

  constructor(
    private postService: PostService,
    private titleService: TitleService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.titleService.emit(this.title);
    this.getPosts(1);
  }

  getPosts(page) {
    this.spinner.show();
    this.postSubscription = this.postService.getAllPosts(page).subscribe(
      (resSuccess) => {
        this.onPostsSuccess(resSuccess);
        this.spinner.hide();
      },
      (resError) => {
        this.onPostsError(resError);
      }
    );
  }

  onPostsSuccess(resSuccess: Posts[]) {
    this.posts = resSuccess;
  }

  onPostsError(resError: any) {
    console.log("ERROR");
  }

  createPost(form: NgForm) {
    const randomId = 100 + (Math.random() * (150 - 100));
    let post = new Posts(randomId, form.value.id, form.value.title, form.value.body);
    this.postService.createPost(post);
    form.reset();
    this.postCreated = true;
  }

  deletePost(indx, postId) {
    // deleting post simultation:
    this.posts.splice(indx, 1);
    this.postDeleted = true;
    // delete post with real http delete method from service:
    this.postService.deletePost(postId).subscribe(
      () => { this.onDeletePostSuccess(); },
      () => { this.onDeletePostError(); }
    );
  }

  onDeletePostSuccess() {
    // this.getPosts(1);
  }

  onDeletePostError() { }

  toggleBody(indx) {
    if (this.visible === indx) {
      this.visible = -1;
    } else {
      this.visible = indx;
    }
  }

  ngOnDestroy() {
    if (this.postSubscription) {
      this.postSubscription.unsubscribe();
    }
  }

  @HostListener('scroll', ['$event'])
  infiniteScroll(event) {
    let position = event.target.scrollTop + event.target.clientHeight;
    let max = event.target.scrollHeight;
    if (position == max) {
      this.postService.getAllPosts(this.page).subscribe((res: Posts[]) => {
        this.page += 1;
        this.posts.push(...res);
      });
    }
  }

}
