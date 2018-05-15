// @flow
import React from 'react';
import TypeMapping from "./TypeMapping";
import FormTheme from "./FormTheme";
import type {RenderFieldProps, RenderProps} from "../type/Renderer";
import {ObjectSchema} from "../type/ObjectSchema";

class Renderer {
    constructor(theme: FormTheme, mappings: Array<TypeMapping>) {
        this.mappings = {
            'string': theme.textField,
            'object': theme.objectField,
            'textarea': theme.textAreaField,
            'number': theme.numberField,
            'integer': theme.numberField,
            'array': theme.arrayField,
            'boolean': theme.checkField,
            'choice': theme.selectionField,
            'date': theme.dateField,
            'datetime': theme.dateTimeField,
            'time': theme.timeField,
            'oneOf': theme.oneOfField,
            'form': theme.formContainer
        };

        Object.values(mappings).forEach(mapping => this.mappings[mapping.type] = mapping.widget);
    }

    render(schema: any,
           readOnly: boolean,
           formData: any,
           onSubmit: func,
           onChange: func): React.Element {
        return React.createElement(
            this.mappings['form'](),
            {onSubmit: onSubmit},
            this.renderField(schema, null, readOnly, 'form')
        );
    }

    renderField(schema: object,
                fieldName: string,
                readOnly: boolean,
                context: string): ReactElement {
        const widget = this.mappings[schema.type];

        if (!widget) {
            console.error(`No widget for type: ${schema.type}`);
            return;
        }

        if (schema.type === 'object') {
            return React.createElement(widget(), {}, this.renderFields(schema, readOnly, context));
        }

        return React.createElement(widget());
    }

    renderFields(schema: ObjectSchema,
                 readOnly: boolean,
                 context: string) {

        return Object.keys(schema.properties).map(key => {
            const fieldSchema = schema.properties[key];
            return this.renderField(
                fieldSchema,
                key,
                readOnly,
                context
            );
        });
    }
}

export default Renderer;