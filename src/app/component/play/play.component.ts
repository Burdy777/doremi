import { Component, OnInit } from '@angular/core';
import { ExerciceService } from 'src/app/exercice.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
note: string = 'Prêt ?';
notes;
stoppedDisplay: boolean = false;
timeRef: any = null;
time: number;

constructor( public exerciceService: ExerciceService) { }
  ngOnInit() {
    // en fonction des donne recupere des formulaire
    this.time = 3000;

    this.notes = this.exerciceService.theMineurTouchs;
    this.timeRef = window.setInterval(() => this.random(this.exerciceService.theMineurTouchs.length), this.time);
  }

  private random(max: number) {
      let index;
      index = Math.floor(Math.random() * Math.floor(max));
      this.note = this.notes[index];

  }

  stop() {
    if (!this.stoppedDisplay)  {
      window.clearInterval(this.timeRef);
      this.timeRef = null;
    } else {
      this.timeRef = window.setInterval(() => this.random(this.exerciceService.theMineurTouchs.length), this.time);
    }
    this.stoppedDisplay = !this.stoppedDisplay;
  }

  quit() {

  }

}
