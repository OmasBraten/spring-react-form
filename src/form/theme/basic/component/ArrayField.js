import React from 'react';

function _ArrayField(props: ObjectFieldProps) {
    return (
        <React.Fragment key={props.fieldContext}>
            <label>{props.label}</label>
            <br/>
            {props.children}
        </React.Fragment>
    )
}

export default _ArrayField;