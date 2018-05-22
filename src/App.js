import React, {Component} from 'react';
import SchemaForm from "./form";

class App extends Component {

  render() {
      /*
      array: {
                  "type": "array",
                  "items": {
                      "type": "number"
                  }
              },
       */
      const schema = {
          title: "Person",
          type: "object",
          properties: {
              textField: {
                  title: "Text field",
                  type: "string",
                  default: "Hans",
                  description: "Your name",
              },
              numberField: {
                  type: "integer",
                  minimum: 0,
                  maximum: 2
              },
              dateField: {
                  type: "string",
                  format: "date"
              },
              dateTimeField: {
                  type: "string",
                  format: "date-time"
              },
              timeField: {
                  type: "string",
                  format: "time"
              },
              uriField: {
                  type: "string",
                  format: "uri"
              },
              emailField: {
                  type: "string",
                  format: "email"
              },
              textAreaField: {
                  type: "string",
                  format: "textarea"
              },
              booleanField: {
                  type: "boolean"
              },
              selectionField: {
                  "type": "string",
                  "enum": ["red", "amber", "green"]
              },
              newObject: {
                  type: "object",
                  properties: {
                      readOnlyField: {
                          type: "string",
                          readOnly: true
                      },
                      editMe: {
                          type: "string"
                      }
                  }
              }
          },
          "required": ["textField", "numberField", "dateField", "dateTimeField", "timeField", "uriField", "emailField"]
      };
    return (
        <SchemaForm schema={schema} onSubmit={(d) => console.log(d)} readOnly={false}/>
    );
  }
}

export default App;
