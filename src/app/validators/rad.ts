import { FormControl } from '@angular/forms';

export class RadValidator {

  static isValid(control: FormControl): any {


    if(isNaN(control.value)){
      return {
        "dit is geen getal": true
      };
    }


    return null;
  }

}
