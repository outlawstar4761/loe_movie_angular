import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './Components/player/player.component';
import { NavbarComponent } from './Components/navbar/navbar.component';

const appRoutes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:PlayerComponent},
  {path:'player',component:PlayerComponent},
  {path:'recent',component:PlayerComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    CookieService,
    {provide:'API_ENDPOINT',useValue:'http://api.outlawdesigns.io:9669/movie/'},
    {provide:'API_ENDPOINT',useValue:'http://loe.outlawdesigns.io/'},
    {provide:'AUTH_ENDPOINT',useValue:'http://api.outlawdesigns.io:9669/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
