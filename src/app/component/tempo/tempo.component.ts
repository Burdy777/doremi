import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tempo',
  templateUrl: './tempo.component.html',
  styleUrls: ['./tempo.component.scss']
})
export class TempoComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.fb.group({
      time: []
    });
  }



  onSubmit() {
    // send the data to service
  }
}
