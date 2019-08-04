import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [
        NavbarComponent,
        HeaderComponent
    ],
    imports: [
        RouterModule,
        CommonModule
    ],
    exports: [
        NavbarComponent,
        HeaderComponent
    ],
    providers: []
})
export class LayoutModule { }