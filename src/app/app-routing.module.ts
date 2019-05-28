import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { PlayComponent } from './component/play/play.component';
import { TestComponent } from './component/test/test.component';

const Routes: Routes = [
  // { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '', component: WelcomeComponent },
  { path: 'play', component: PlayComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(Routes)
  ],
  exports: [RouterModule],

})
export class AppRoutingModule { }
