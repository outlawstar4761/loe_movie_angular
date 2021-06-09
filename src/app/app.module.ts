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
import { SearchBottomSheetComponent } from './Components/search-bottom-sheet/search-bottom-sheet.component';
import { RecentGridComponent } from './Components/recent-grid/recent-grid.component';
import { LoginComponent } from './Components/login/login.component';
import { MovieComponent } from './Components/movie/movie.component';


const appRoutes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'player',component:PlayerComponent},
  {path:'recent',component:RecentGridComponent},
  {path:'movie/:UID',component:MovieComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    NavbarComponent,
    SearchBottomSheetComponent,
    RecentGridComponent,
    LoginComponent,
    MovieComponent
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
    {provide:'API_ENDPOINT',useValue:'https://api.outlawdesigns.io:9669/movie/'},
    {provide:'LOE_DOMAIN',useValue:'https://loe.outlawdesigns.io/'},
    {provide:'AUTH_ENDPOINT',useValue:'https://api.outlawdesigns.io:9669/'}
  ],
  entryComponents:[SearchBottomSheetComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
