import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap/alert';

import { LayoutModule } from '../layouts/layout.module';

import { PostService } from '../entities/posts/posts.service';

import { ErrorPageComponent } from './error-page/error-page.component';
import { AboutComponent } from '../pages/about/about.component';
import { HomeComponent } from '../pages/home/home.component';
import { PostsComponent } from '../pages/posts/posts.component';
import { TechnicalSupportComponent } from '../pages/technical-support/technical-support.component';
import { PostsFilter } from './pipes/posts-filter.pipe';

import { TitleService } from './message-emmiter.service';

@NgModule({
    declarations: [
        ErrorPageComponent,
        AboutComponent,
        HomeComponent,
        PostsComponent,
        TechnicalSupportComponent,
        PostsFilter
    ],
    imports: [
        BrowserModule,
        CommonModule,
        LayoutModule,
        HttpClientModule,
        FormsModule,
        AlertModule.forRoot(),
    ],
    exports: [
        ErrorPageComponent,
        AboutComponent,
        HomeComponent,
        PostsComponent,
        LayoutModule,
        HttpClientModule,
        FormsModule,
        PostsFilter,
        AlertModule,
        TechnicalSupportComponent
    ],
    providers: [
        PostService,
        TitleService
    ]
})
export class UtilModule { }