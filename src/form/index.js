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
        formData: {}
    };

    constructor(props) {
        super(props);

        this.renderer = new Renderer(props.theme, props.mappings);
        this.ajv = new Ajv();
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

        this.state.formData = props.formData;
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
            this.setState({formData: nextProps.formData})
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

    onChange(context, data): void {
        this.setState({formData: this.setData(context, data, this.state.formData)}, () => {
            if (this.props.onChange)
                this.props.onChange(this.state.formData)
        });
    }

    setData(context, data, formData) {
        const path = context.split('.').filter(x => x !== "");
        let currentData = formData;
        for (let i = 0; i < path.length; i++) {
            if (!currentData[path[i]]) {
                currentData[path[i]] = undefined;
            }
            if (i === path.length - 1) {
                currentData[path[i]] = data;
            }
            currentData = currentData[path[i]];
        }
        return formData;
    }

    render() {
        //TODO: add prop if in static mode empty fields are rendered or not also for readonly fields in non editing mode
        const {schema, readOnly} = this.props;
        if (!this.state.validSchema)
            return (<p>The scheme is not valid!</p>);
        return (
            this.renderer.render(schema, readOnly, this.state.formData, this.onSubmit, this.onChange)
        )
    }
}

export default SchemaForm;