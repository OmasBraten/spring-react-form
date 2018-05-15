import FormTheme from "../theme/FormTheme";
import TypeMapping from "../theme/TypeMapping";

export type Props = {
    schema: any,
    readOnly?: boolean,
    formData: any,
    onSubmit: (data: any) => void,
    onChange?: (data: any) => void,
    theme?: FormTheme,
    mappings?: TypeMapping
};

export type State = {
    validSchema: boolean
};