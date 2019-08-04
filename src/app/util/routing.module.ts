import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ErrorPageComponent } from './error-page/error-page.component';
import { AboutComponent } from '../pages/about/about.component';
import { HomeComponent } from '../pages/home/home.component';
import { PostsComponent } from '../pages/posts/posts.component';
import { TechnicalSupportComponent } from '../pages/technical-support/technical-support.component';

const prodynaRoutes: Routes = [
    { path: '', component: HomeComponent, data: { message: 'HOME' } },
    { path: 'about', component: AboutComponent, data: { message: 'ABOUT' } },
    { path: 'posts', component: PostsComponent, data: { message: 'POSTS' } },
    { path: 'tech-support', component: TechnicalSupportComponent, data: { message: 'Technical Support' } },
    { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page not found!' } },
    { path: '**', redirectTo: '/not-found' }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(prodynaRoutes)
    ],
    exports: [RouterModule]
})
export class PagesRoutingModule { }