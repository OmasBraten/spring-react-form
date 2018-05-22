import React from 'react';
import {ObjectFieldProps} from "../../../type/FormTheme";

function _ObjectField(props: ObjectFieldProps) {
    return (
        <fieldset>
            {props.label && (
                <legend>{props.label}</legend>
            )}
            {props.children}
        </fieldset>
    )
}

export default _ObjectField;