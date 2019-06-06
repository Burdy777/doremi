import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExerciceService {
public BehaviorSubject: BehaviorSubject<any> = new BehaviorSubject(null);
private simpleTouchs = ['do', 're', 'mi', 'fa', 'sol', 'la', 'si'];
private majeurTouchs = ['do majeur', 're majeur', 'mi majeur', 'fa majeur', 'sol majeur', 'la majeur', 'si majeur'];
private mineurTouchs = ['do mineur', 're mineur', 'mi mineur', 'fa mineur', 'sol mineur', 'la mineur', 'si mineur'];
private data = [
  {selected: false, touch: 'simpleTouchs'},
  {selected: false, touch: 'majeurTouchs'},
  {selected: false, touch: 'mineurTouchs'}
];

set theMineurTouchs(v) {
this.mineurTouchs = v;
}


  constructor() { }

  get theSimpleTouchs() {
    return this.simpleTouchs;
  }
  get theMajeurTouchs() {
    return this.majeurTouchs;
  }
  get theMineurTouchs() {
    return this.mineurTouchs;
  }

  get touchsForm () {
    return this.data;
  }

  set touchsForm(submittedData) {
    submittedData = this.data;
  }

  gameConfig() {
    //  return all combinaison for from data after form is totally submitted
  }
}
