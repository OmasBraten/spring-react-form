import React from 'react';
import FormWidget from "./FormWidget";

class FormTheme {
    //TODO: return types
    static formContainer() {
        throw new NotImplementedException("form container not implemented")
    }

    static textField(): FormWidget {
        throw new NotImplementedException("Text field not implemented")
    }

    static arrayField() {
        throw new NotImplementedException("Array field not implemented")
    }

    static objectField() {
        throw new NotImplementedException("Object field not implemented")
    }

    static oneOfField() {
        throw new NotImplementedException("One of field not implemented")
    }

    static numberField() {
        throw new NotImplementedException("Number field not implemented")
    }

    static textAreaField() {
        throw new NotImplementedException("Text area field not implemented")
    }

    static selectionField() {
        throw new NotImplementedException("Selection field not implemented")
    }

    static checkField() {
        throw new NotImplementedException("Check field not implemented")
    }

    static dateField() {
        throw new NotImplementedException("Date field not implemented")
    }

    static dateTimeField() {
        throw new NotImplementedException("Date time field not implemented")
    }

    static timeField() {
        throw new NotImplementedException("Time field not implemented")
    }
}

function NotImplementedException(message) {
    this.message = message;
    this.name = "NotImplementedException";
}

export default FormTheme;