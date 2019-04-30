import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class NumberForm extends Component {
  render() {
    return (
      <Form.Input
        label="Enter A number between 0 and 99,999"
        type="number"
        min="0"
        max="99999"
      />
    );
  }
}

export default NumberForm;
