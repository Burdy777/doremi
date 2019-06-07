import { FormControl, FormArray } from '@angular/forms';

export function validateLevel (cArr: FormArray) {
const result =  cArr.controls.some(c => c.value === true) ? null : { validateLevel: { valid: false } };
return result;
}

