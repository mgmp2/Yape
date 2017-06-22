'use strict';


const validateNumber = (input) => {
    input.on('keypress', (e) => {
        if(e.which >= 48 && e.which <=57 ) {
            return true;
        } else {
            return false;
        }
    });
}
