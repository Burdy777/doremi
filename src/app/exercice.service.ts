import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExerciceService {
private simpleTouchs = ['do', 're', 'mi', 'fa', 'sol', 'la', 'si'];
private majeurTouchs = ['do majeur', 're majeur', 'mi majeur', 'fa majeur', 'sol majeur', 'la majeur', 'si majeur'];
private mineurTouchs = ['do mineur', 're mineur', 'mi mineur', 'fa mineur', 'sol mineur', 'la mineur', 'si mineur'];



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

}
