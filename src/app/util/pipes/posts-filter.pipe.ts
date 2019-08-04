import { Pipe, PipeTransform } from "@angular/core";

import { Posts } from 'src/app/entities/posts/posts.model';

@Pipe({
    name: 'postsFilter'
})
export class PostsFilter implements PipeTransform {

    transform(posts: Posts[], queryString: string): Posts[] {
        if (!queryString) {
            return posts;
        }
        return posts.filter(post => post.title.toLowerCase().indexOf(queryString.toLowerCase()) > - 1);
    }

}