import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { PlayComponent } from './component/play/play.component';
import { TempoComponent } from './component/tempo/tempo.component';
import { LevelComponent } from './component/level/level.component';

const Routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome',
    component: WelcomeComponent,
    children: [
      {path: '' , outlet: 'formRoute', component: LevelComponent},
      {path: 'end-form', outlet: 'formRoute', component: TempoComponent}
    ]
  },
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
