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
            'date-time': theme.dateTimeField,
            'time': theme.timeField,
            'oneOf': theme.oneOfField,
            'form': theme.formContainer,
            'email': theme.emailField,
            'uri': theme.uriField
        };

        Object.values(mappings).forEach(mapping => this.mappings[mapping.type] = mapping.widget);
    }

    render(schema: any,
           readOnly: boolean,
           formData: any,
           onSubmit: func,
           onChange: func): React.Element {
        return React.createElement(
            this.mappings['form'],
            {onSubmit: onSubmit},
            this.renderField(schema, '', readOnly, '')
        );
    }

    renderField(schema: any,
                fieldName: string,
                readOnly: boolean,
                context: string,
                required: boolean): ReactElement {
        const widget = this.getWidget(schema);
        if (!widget) {
            console.error(`No widget for type: ${schema.type}`);
            return;
        }

        const fieldLabel = schema.title ? schema.title : fieldName;
        const isStatic = readOnly || (schema.readOnly !== undefined && schema.readOnly === true);

        if (schema.type === 'object') {
            return React.createElement(widget,
                {label: fieldLabel, context: context},
                this.renderFields(schema, readOnly, context ? context + '.' : context));
        }

        return React.createElement(widget, {
            schema: schema,
            label: fieldLabel,
            readOnly: isStatic,
            required: required,
            fieldContext: context,
            defaultValue: schema.default,
            description: schema.description
        });
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
                context + key,
                this.isRequired(schema, key)
            );
        });
    }

    isRequired(schema, field) {
        if (!schema.required)
            return false;
        return schema.required.includes(field);
    }

    getWidget(schema) {
        if (schema.widget) {
            return this.mappings[schema.widget];
        }

        if (schema.format) {
            return this.mappings[schema.format];
        }

        if (schema.enum) {
            return this.mappings['choice'];
        }

        return this.mappings[schema.type];
    }
}

export default Renderer;