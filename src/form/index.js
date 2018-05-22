import React from 'react';
import Renderer from "./theme/Renderer";
import {Props, State} from "./type/SchemaForm"
import Ajv from 'ajv'
import {BasicTheme} from "./theme";

class SchemaForm extends React.Component<Props, State> {
    static defaultProps = {
        readOnly: false,
        formData: {},
        theme: BasicTheme,
        mappings: {}
    };
    state = {
        validSchema: true,
    };

    constructor(props) {
        super(props);

        this.renderer = new Renderer(props.theme, props.mappings);
        this.ajv = new Ajv();
    }

    componentWillMount() {
        if (this.validateSchema(this.props.schema))
            this.ajv.addSchema(this.props.schema, "schema");
        if (Object.keys(this.props.formData) > 0)
            this.validateData(this.props.formData)
        //TODO: validate theme and mappings
    }

    componentWillReceiveProps(nextProps: SchemaFormProps) {
        if (nextProps.theme !== this.props.theme || nextProps.mappings !== this.props.mappings) {
            this.renderer = new Renderer(nextProps.theme, nextProps.mappings);
        }

        if (nextProps.schema !== this.props.schema) {
            if (this.validateSchema(nextProps.schema)) {
                this.ajv.removeSchema("schema");
                this.ajv.addSchema(nextProps.schema, "schema");
            }
        }

        if (nextProps.formData !== this.props.formData) {
            this.validateData(nextProps.formData)
        }
    }

    validateSchema(schema: object): boolean {
        try {
            const valid = this.ajv.validateSchema(schema);
            this.setState({validSchema: valid});
            return valid;
        } catch (e) {
            console.error(e.message);
            this.setState({validSchema: false});
            return false;
        }
    }

    validateData(formData: object): any {
        try {
            const valid = this.ajv.validate("schema", formData);
            if (!valid) console.log(this.ajv.errors);
        } catch (e) {
            console.error(e.message);
        }
    }

    onSubmit(): void {
        //TODO: data
        this.validateData({});
        this.props.onSubmit({});
    }

    render() {
        //TODO: add prop if in static mode empty fields are rendered or not also for readonly fields in non editing mode
        const {schema, readOnly, formData, onSubmit, onChange} = this.props;
        if (!this.state.validSchema)
            return (<p>The scheme is not valid!</p>);
        return (
            this.renderer.render(schema, readOnly, formData, onSubmit, onChange)
        )
    }
}

export default SchemaForm;