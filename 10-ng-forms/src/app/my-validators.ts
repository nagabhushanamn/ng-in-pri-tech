import { AbstractControl } from '@angular/forms';


export function range(min, max) {
    return function range(control: AbstractControl): { [key: string]: any } | null {
        let age = control.value;
        if (age >= min && age <= max) return null
        else return { range: `age >= ${min} && age <= ${max}` }
    }
}
