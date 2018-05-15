import React from 'react';
import type {FormContainerProps} from "../../../type/FormTheme";

function _FormContainer(props: FormContainerProps) {
    console.log(props);
    return (
        <form onSubmit={props.onSubmit}>
            {props.children}
        </form>
    )
}

export default _FormContainer;