export type FormContainerProps = {
    schema: any,
    readOnly: boolean,
    formData: any,
    onSubmit: (data: any) => void,
    onChange?: (data: any) => void,
    children: any
};