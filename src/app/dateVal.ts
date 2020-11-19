import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

const dueDateCheck = (due: AbstractControl) => {

    const date = new Date();
    const truncatedDate = date.toISOString().split('T')[0];
    if (due.value >= truncatedDate) {
        return (null)
    }
    return {dueDateCheck: true} as ValidationErrors
}


export default dueDateCheck;
