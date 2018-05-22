import React from 'react';
import FormWidget from "../../FormWidget";
import type {BaseInputFieldProps} from "../../../type/FormTheme";

class _CheckboxField extends FormWidget {
    constructor(props: BaseInputFieldProps) {
        super(props);
    }

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
                <input required={this.props.required}
                       name={this.props.label}
                       id={this.props.fieldContext}
                       type={this.props.type}
                       placeholder={this.props.defaultValue}
                       value={this.props.value}
                />
                <label htmlFor={this.props.fieldContext}>{this.props.label}</label>
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

export default _CheckboxField;