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
timeRef;
constructor( public exerciceService: ExerciceService) { }

  ngOnInit() {
    this.notes = this.exerciceService.theMineurTouchs;
    this.timeRef = window.setInterval(() => this.random(this.exerciceService.theMineurTouchs.length), 2000);

  }

  private random(max: number) {
      let index;
      index = Math.floor(Math.random() * Math.floor(max));
      this.note = this.notes[index];
  }


  stop() {
    window.clearInterval(this.timeRef);
  }

  quit() {

  }

}
