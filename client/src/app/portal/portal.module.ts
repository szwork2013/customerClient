import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { MaterialModule } from '@angular/material';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { NavbarModule } from '../navbar/navbar.module';

import { PortalComponent } from './portal.component';
import { routing } from './portal.routing';


@NgModule({
    imports: [
        SharedModule,
        RouterModule,
        MaterialModule.forRoot(),
        SlimLoadingBarModule.forRoot(),
        NavbarModule,
        routing
    ],
    declarations: [PortalComponent]
})
export class PortalModule { }