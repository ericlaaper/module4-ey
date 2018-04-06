import { FormControl } from '@angular/forms';

export class Bedrag1Validator {

  static isValid(control: FormControl): any {

    if(isNaN(control.value)){
      return {
        "dit is geen getal": true
      };
    }

    if(control.value % 1 !== 0){
      return {
        "vul een getal in zonder komma, punten of euroteken": true
      };
    }
    if(control.value < 0){
      return {
        "bedrag lijkt niet juist": true
      };
    }

    if (control.value > 120000000){
      return {
        "voor dergelijke getallen werkt dit helaas niet": true
      };
    }

    return null;
  }

}
