import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ExerciceService } from 'src/app/exercice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { validateLevel } from 'src/app/services/validators/validators';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss']
})
export class LevelComponent implements OnInit {
musicForm: FormGroup;
mode: any[];
get modes () {
  return this.musicForm.get('mode') as FormArray;
}
  constructor(private fb: FormBuilder, public exerciceService: ExerciceService, private router: Router, private route: ActivatedRoute) {
    this.mode = this.exerciceService.touchsForm;

  }

  ngOnInit() {
    this.musicForm = this.fb.group({
      mode: this.buildForm()
    });
  }


  buildForm() {
    let arr;
    if (this.exerciceService.BehaviorSubject.getValue()) {
        const editValue = this.exerciceService.BehaviorSubject.getValue();
        arr = editValue.map((touch) => {
        return this.fb.control(touch);
     });
    } else {
      arr = this.mode.map((touch) => {
        return this.fb.control(touch['selected']);
      });
    }

    return this.fb.array(arr, validateLevel);
  }

submit(value) {
  this.exerciceService.BehaviorSubject.next(value.mode);
  this.router.navigate([{outlets: {formRoute: 'end-form'}}], {relativeTo: this.route});
}
}
