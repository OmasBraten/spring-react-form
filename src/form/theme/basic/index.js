import React from 'react';
import FormTheme from "../FormTheme";
import {
    ArrayField,
    BaseInputField,
    CheckboxField,
    FormContainer,
    ObjectField,
    SelectionField,
    TextareaField
} from "./component";
import FormWidget from "../FormWidget";
import {FieldProps, FormContainerProps} from "../../type/FormTheme";

class _BasicTheme extends FormTheme {
    static formContainer(props: FormContainerProps) {
        return <FormContainer {...props}/>
    }

    static objectField(props) {
        return <ObjectField {...props}/>
    }

    static arrayField(props) {
        return <ArrayField {...props}/>
    }

    static textField(props: FieldProps): FormWidget {
        return <BaseInputField {...props} type={"text"}/>
    }

    static textAreaField(props: FieldProps): FormWidget {
        return <TextareaField {...props}/>
    }

    static numberField(props: FieldProps): FormWidget {
        return <BaseInputField {...props} type={"number"}/>
    }

    static dateField(props: FieldProps): FormWidget {
        return <BaseInputField {...props} type={"date"}/>
    }

    static dateTimeField(props: FieldProps): FormWidget {
        return <BaseInputField {...props} type={"datetime-local"}/>
    }

    static timeField(props: FieldProps): FormWidget {
        return <BaseInputField {...props} type={"time"}/>
    }

    static emailField(props: FieldProps): FormWidget {
        return <BaseInputField {...props} type={"email"}/>
    }

    static uriField(props: FieldProps): FormWidget {
        return <BaseInputField {...props} type={"url"}/>
    }

    static checkField(props: FieldProps): FormWidget {
        return <CheckboxField {...props} type={"checkbox"}/>
    }

    static selectionField(props: FieldProps): FormWidget {
        return <SelectionField {...props} options={props.schema.enum}/>
    }
}

export default _BasicTheme;