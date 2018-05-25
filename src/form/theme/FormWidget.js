import React from 'react';

class FormWidget<R> extends React.Component<R> {
    getStatic() {
        return <p>STATIC</p>;
    }

    getNonStatic() {
        return <p>NON STATIC</p>;
    }

    render() {
        if (this.props.readOnly) {
            return this.getStatic();
        } else {
            return this.getNonStatic();
        }
    }
}

export default FormWidget;