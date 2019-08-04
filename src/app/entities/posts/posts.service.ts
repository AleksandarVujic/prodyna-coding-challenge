import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Posts } from './posts.model';

@Injectable({
    providedIn: 'root'
})
export class PostService {

    postsAPI: string = 'http://jsonplaceholder.typicode.com/posts';

    constructor(private httpClient: HttpClient) { }

    getAllPosts(page): Observable<Posts[]> {
        return this.httpClient.get<Posts[]>(this.postsAPI+`?_page=${page}&_limit=20`);
    }

    getPostsByUserId(userId: number): Observable<Posts[]> {
        return this.httpClient.get<Posts[]>(this.postsAPI + `?userId=${userId}`)
    }

    createPost(post: Posts) {
        this.httpClient.post(this.postsAPI, post);
    }

    deletePost(id: number) {
        return this.httpClient.delete(this.postsAPI + '/' + id);
    }
}