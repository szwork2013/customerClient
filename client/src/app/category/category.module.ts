import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { MaterialModule } from '@angular/material';
import { ToastyModule } from 'ng2-toasty';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { TabsModule } from 'ng2-bootstrap/ng2-bootstrap';

import { SharedModule } from '../shared/shared.module';
import { NavbarModule } from '../navbar/navbar.module';

import { CategoryComponent } from './category.component';
import { routing } from './category.routing';


@NgModule({
    imports: [
        SharedModule,
        RouterModule,
        ToastyModule.forRoot(),
        SlimLoadingBarModule.forRoot(),
        MaterialModule.forRoot(),
        TabsModule,
        NavbarModule,
        routing
    ],
    declarations: [CategoryComponent]
})
export class CategoryModule { }