import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { PlayComponent } from './component/play/play.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { TempoComponent } from './component/tempo/tempo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExerciceService } from './exercice.service';
import { LevelComponent } from './component/level/level.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PlayComponent,
    TempoComponent,
    LevelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot()
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
