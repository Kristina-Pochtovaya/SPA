import {AbstractControl, ValidationErrors} from '@angular/forms';

export class AgesInputValidators {
    static cannotContainCharacters(control: AbstractControl): ValidationErrors | null {
        let val = control.value;

        if(isNaN(val)){
            return {cannotContainCharacters: true}
        }

        return null;
    }
}