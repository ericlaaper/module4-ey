import { FormControl } from '@angular/forms';

export class LeeftijdValidator {

  static isValid(control: FormControl): any {

    if(isNaN(control.value)){
      return {
        "dit is geen getal": true
      };
    }

    if(control.value % 1 !== 0){
      return {
        "vul een getal ": true
      };
    }
    if(control.value < 50){
      return {
        "vul een getal in van meer dan 50": true
      };
    }

    if (control.value > 100){
      return {
        "deze leeftijd lijkt niet reeel vul een leeftijd in van maximaal 100": true
      };
    }

    return null;
  }

}
