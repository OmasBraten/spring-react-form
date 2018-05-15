import React from 'react';
import FormTheme from "../FormTheme";
import {BaseInputField, FormContainer, ObjectField} from "./component";
import FormWidget from "../FormWidget";

class _BasicTheme extends FormTheme {
    static formContainer() {
        return FormContainer
    }

    static objectField() {
        return ObjectField
    }

    static textField(): FormWidget {
        return BaseInputField
    }

    static numberField(): FormWidget {
        return BaseInputField
    }
}

export default _BasicTheme;