import React, { Component } from 'react';
import SchemaForm from "./form";

class App extends Component {

  render() {
      const schema = {
          "title": "Person",
          "type": "object",
          "properties": {
              "firstName": {
                  "type": "string"
              },
              "lastName": {
                  "type": "string"
              },
              "age": {
                  "description": "Age in years",
                  "type": "integer",
                  "minimum": 0
              }
          },
          "required": ["firstName", "lastName"]
      };
    return (
      <SchemaForm schema={schema} onSubmit={(d) => console.log(d)}/>
    );
  }
}

export default App;
