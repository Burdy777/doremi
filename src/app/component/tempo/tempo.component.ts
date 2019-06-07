import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ExerciceService } from 'src/app/exercice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tempo',
  templateUrl: './tempo.component.html',
  styleUrls: ['./tempo.component.scss']
})
export class TempoComponent implements OnInit {
times = [1 ,2 ,3]
form: FormGroup;
  constructor(private fb: FormBuilder, public exerciceService: ExerciceService, public router: Router) {

   }

  ngOnInit() {
    this.form = this.fb.group({
      time: ['']
    });

  }

  back() {
    this.router.navigate(['welcome'])
  }

  onSubmit(value) {
    const val = this.exerciceService.BehaviorSubject.getValue();
    const newVal = {mode: val, time: value.time};
    this.exerciceService.BehaviorSubject.next(newVal);
    this.router.navigate(['play'])
  }
}

