// @flow
import React from 'react';
import TypeMapping from "./TypeMapping";
import FormTheme from "./FormTheme";
import FormWidget from "./FormWidget";

class Renderer {
    constructor(theme: FormTheme, mappings: Array<TypeMapping>) {
        //FIXME: only key to widget
        const defaultMappings = {
            'string': new TypeMapping('string', theme.textField),
            'object': new TypeMapping('object', theme.objectField),
            'textarea': new TypeMapping('textarea', theme.textAreaField),
            'number': new TypeMapping('number', theme.numberField),
            'array': new TypeMapping('array', theme.arrayField),
            'boolean': new TypeMapping('boolean', theme.checkField),
            'choice': new TypeMapping('choice', theme.selectionField),
            'date': new TypeMapping('date', theme.dateField),
            'datetime': new TypeMapping('datetime', theme.dateTimeField),
            'time': new TypeMapping('time', theme.timeField),
            'oneOf': new TypeMapping('oneOf', theme.oneOfField),
            'form': new TypeMapping('form', theme.formContainer)
        };
        this.mappings = Object.assign({}, defaultMappings, mappings);
    }

    renderField(type: string): ReactElement {
        const widget = this.mappings[type];
        console.log(widget);
        return React.createElement(widget.widget())
    }

    render(): React.Element {
        return React.createElement(this.mappings['form'].widget())
    }

    renderFields() {

    }
}

export default Renderer;