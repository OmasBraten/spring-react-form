import React from 'react';

class FormWidget extends React.Component {

    getStatic() {
        return <p>STATIC</p>;
    }

    getNonStatic() {
        return <p>NON STATIC</p>;
    }

    render() {
        if (this.props.static) {
            return this.getStatic();
        } else {
            return this.getNonStatic();
        }
    }
}

export default FormWidget;