import React from 'react';
import FormWidget from "../../FormWidget";
import type {BaseInputFieldProps} from "../../../type/FormTheme";

class _TextareaField extends FormWidget<BaseInputFieldProps> {
    getStatic() {
        return (
            <div key={this.props.fieldContext}>
                <label>{this.props.label}:</label>
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
                <textarea required={this.props.required}
                          name={this.props.label}
                          id={this.props.fieldContext}
                          placeholder={this.props.defaultValue}
                          value={this.props.value}
                          onChange={(e) => this.props.onChange(e.target.value)}
                />
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

export default _TextareaField;