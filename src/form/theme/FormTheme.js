import FormWidget from "./FormWidget";
import {FieldProps, FormContainerProps} from "../type/FormTheme";

class FormTheme {
    //TODO: types
    static formContainer(props: FormContainerProps) {
        throw new NotImplementedException("form container not implemented")
    }

    static objectField(props) {
        throw new NotImplementedException("Object field not implemented")
    }

    static arrayField(props) {
        throw new NotImplementedException("Array field not implemented")
    }

    static textField(props: FieldProps): FormWidget {
        throw new NotImplementedException("Text field not implemented")
    }

    static oneOfField(): FormWidget {
        throw new NotImplementedException("One of field not implemented")
    }

    static numberField(props: FieldProps): FormWidget {
        throw new NotImplementedException("Number field not implemented")
    }

    static textAreaField(props: FieldProps): FormWidget {
        throw new NotImplementedException("Text area field not implemented")
    }

    static selectionField(props: FieldProps): FormWidget {
        throw new NotImplementedException("Selection field not implemented")
    }

    static checkField(props: FieldProps): FormWidget {
        throw new NotImplementedException("Check field not implemented")
    }

    static dateField(props: FieldProps): FormWidget {
        throw new NotImplementedException("Date field not implemented")
    }

    static dateTimeField(props: FieldProps): FormWidget {
        throw new NotImplementedException("Date time field not implemented")
    }

    static timeField(props: FieldProps): FormWidget {
        throw new NotImplementedException("Time field not implemented")
    }

    static emailField(props: FieldProps): FormWidget {
        throw new NotImplementedException("Email field not implemented")
    }

    static uriField(props: FieldProps): FormWidget {
        throw new NotImplementedException("URI field not implemented")
    }
}

function NotImplementedException(message) {
    this.message = message;
    this.name = "NotImplementedException";
}

export default FormTheme;