// @flow
import FormWidget from "./FormWidget";

class TypeMapping {
    type: string;
    widget: FormWidget;

    constructor(type, widget) {
        this.type = type;
        this.widget = widget;
    }
}

export default TypeMapping;