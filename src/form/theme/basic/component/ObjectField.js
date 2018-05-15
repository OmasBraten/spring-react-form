import React from 'react';
import type {FormContainerProps} from "../../../type/FormTheme";

function _ObjectField(props: FormContainerProps) {
    console.log(props);
    return (
        <React.Fragment>
            <p>Object</p>
            {props.children}
        </React.Fragment>
    )
}

export default _ObjectField;