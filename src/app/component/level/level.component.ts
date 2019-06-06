import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { ExerciceService } from 'src/app/exercice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss']
})
export class LevelComponent implements OnInit {
musicForm: FormGroup;
mode: any[];
  constructor(private fb: FormBuilder, public exerciceService: ExerciceService, private router:Router) {
    this.mode = this.exerciceService.touchsForm;

  }

  ngOnInit() {
    this.musicForm = this.fb.group({
      mode: this.buildForm()
    });
  }

  get modes () {

    return this.musicForm.get('mode') as FormArray;
  }
  buildForm() {
    const arr = this.mode.map((touch) => {
      return this.fb.control(touch['selected']);
    });
    return this.fb.array(arr);
  }

  submit(value) {
this.exerciceService.BehaviorSubject.next(value);
// this.router.navigate([{ outlets: { formRoute: 'welcome/end-form' }}]);

}
// navigate to second part of form
}
