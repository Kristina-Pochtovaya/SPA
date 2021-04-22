import {AbstractControl, ValidationErrors} from '@angular/forms';

export class InputValidators {
    static cannotContainCharacters(control: AbstractControl): ValidationErrors | null {
        let val = control.value;

        if(isNaN(val)){
            return {cannotContainCharacters: 'Ages cannot contain characters'}
        }

        return null;
    }
/* 
    static errorEmailFormat(control: AbstractControl): ValidationErrors | null {
        let val = control.value;

    if(isNaN(val)){
        return {errorEmailFormat: 'Email should have email format'}
    }

        return null;
    } */
}