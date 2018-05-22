export type FormContainerProps = {
    schema: any,
    readOnly: boolean,
    formData: any,
    onSubmit: (data: any) => void,
    onChange?: (data: any) => void,
    children: any
};

export type FieldProps = {
    schema: any,
    description: string,
    defaultValue: any,
    required: boolean,
    fieldContext: string,
    label: string,
    readOnly: boolean
}

export type BaseInputFieldProps = {
    schema: any,
    description: string,
    defaultValue: any,
    type: string,
    required: boolean,
    fieldContext: string,
    label: string,
    readOnly: boolean
}

export type SelectionFieldProps = {
    schema: any,
    description: string,
    defaultValue: any,
    options: Array<string>,
    required: boolean,
    fieldContext: string,
    label: string,
    readOnly: boolean
}

export type ObjectFieldProps = {
    context: string,
    label?: string,
    children: Array<any>
}