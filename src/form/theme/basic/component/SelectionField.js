import React from 'react';
import FormWidget from "../../FormWidget";
import type {SelectionFieldProps} from "../../../type/FormTheme";

class _SelectionField extends FormWidget<SelectionFieldProps> {
    getStatic() {
        return (
            <div key={this.props.fieldContext}>
                <label>{this.props.label}</label>
                <br/>
                <p>{this.props.value}</p>
            </div>
        )
    }

    getNonStatic() {
        return (
            <React.Fragment key={this.props.fieldContext}>
                <label htmlFor={this.props.fieldContext}>{this.props.label}</label>
                <br/>
                <select name={this.props.fieldContext} onChange={(e) => this.props.onChange(e.target.value)}>
                    {this.props.options.map((option, idx) =>
                        <option key={`${this.props.fieldContext}.${option}`} value={option}>{option}</option>
                    )}
                </select>
                <br/>
                {this.props.description && (
                    <React.Fragment>
                        <span style={{color: "#737373"}}>{this.props.description}</span>
                        <br/>
                    </React.Fragment>
                )}
            </React.Fragment>
        );
    }
}

export default _SelectionField;