import {AbstractControl, ValidationErrors} from '@angular/forms';

export class InputValidators {
    static cannotBeEmpty(control: AbstractControl): ValidationErrors | null
    {
        if(control.value === '' || control.value ===  null)
            return {cannotBeEmpty: 'The field cannot be empty'}
    
        return null;
    }

    static emailFormat(control: AbstractControl): ValidationErrors | null{
        let val = control.value;
        if( val !== null){
        if((control.value).search('@') === -1)
            return {emailFormat: 'Email should have email format'}
        }
        return null;
    }

    static minLength(control: AbstractControl): ValidationErrors | null{
        let val = control.value;
        if( val !== null){
        if((control.value).length < 9)
            return {minLength: `Password length should be at least 9 symbols.
            Now ${control.value.length}.` }
        }
        return null;
    }
    
    static cannotContainCharacters(control: AbstractControl): ValidationErrors | null {
        let val = control.value;

        if(isNaN(val)){
            return {cannotContainCharacters: 'Ages cannot contain characters'}
        }

        return null;
    }
}