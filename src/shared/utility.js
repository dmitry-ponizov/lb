import Noty from 'noty'
import '../../node_modules/noty/lib/noty.css'
import '../../node_modules/noty/lib/themes/bootstrap-v4.css'

export const updateObject = (oldObject, updatedProps) => {
    return {
        ...oldObject,
        ...updatedProps
    }
 }


 export const checkValidity = (value, rules, secondValue = null) => {

        let isValid = true;

        if(!rules) {
            return true;
        }
        if(rules.required){
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
             isValid = value.length <= rules.minLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isConfirmed) {
            isValid = secondValue && value === secondValue && isValid 
        }
        
        return isValid;
   
}

export const getNoty = (type, msg) => {
   new Noty({ type: type, layout: 'bottomRight',text: msg, theme:'bootstrap-v4', timeout: 3000 }).show()
}