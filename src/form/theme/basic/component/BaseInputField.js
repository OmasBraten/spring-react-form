import React from 'react';
import FormWidget from "../../FormWidget";

class _BaseInputField extends FormWidget {
    getStatic() {
        return <p>static</p>;
    }

    getNonStatic() {
        return <input/>;
    }
}

export default _BaseInputField;