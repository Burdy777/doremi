import { Component, OnInit } from '@angular/core';
import { ExerciceService } from 'src/app/exercice.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(public ex: ExerciceService) { }

  ngOnInit() {
    this.ex.BehaviorSubject.subscribe((v) => {
      console.log(v);
    });
  }




}
