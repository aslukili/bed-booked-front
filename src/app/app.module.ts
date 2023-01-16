import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon'



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './modules/home/home.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthModule } from './modules/auth/auth.module';
import { AuthenticationGuard } from './guards/authentication.guard';
import { AuthenticationInterceptor } from './interceptors/authentication.interceptor';
import { SharedModule } from "./modules/shared/shared.module";
import { HotelsComponent } from './modules/hotels/hotels.component';
import { HotelDetailsComponent } from './modules/hotel-details/hotel-details.component';
import { RoomsTableComponent } from './modules/rooms-table/rooms-table.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ProfileComponent,
        HotelsComponent,
        HotelDetailsComponent,
        RoomsTableComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        HttpClientModule,
        AuthModule,
        SharedModule,
        MatTableModule,
        MatIconModule
    ]
})
export class AppModule { }
