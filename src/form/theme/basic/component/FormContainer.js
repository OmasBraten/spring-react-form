import React from 'react';
import type {FormContainerProps} from "../../../type/FormTheme";

function _FormContainer(props: FormContainerProps) {
    return (
        <form onSubmit={props.onSubmit}>
            {props.children}
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default _FormContainer;