import React, { Component } from 'react';
import { Form, Container, Button, Message } from 'semantic-ui-react';
import NumberToWord from './NumberToWord';

class NumberForm extends Component {
  state = {
    number: null,
    word: ''
  };

  onChange = event => this.setState({ number: event.target.value });
  onSubmit = () => {
    let { number } = this.state;
    const word = NumberToWord(number);
    this.setState({
      number: null,
      word
    });
    console.log(this.state);
  };

  render() {
    let input;
    return (
      <Container text textAlign="center">
        <h1>Number To Words</h1>
        <Form onChange={this.onChange} onSubmit={this.onSubmit} success>
          <Form.Input
            label="Enter A number between 0 and 99,999"
            type="number"
            min="0"
            value={input}
            max="99999"
          />
          <Message>{this.state.word}</Message>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    );
  }
  //we are still doing some light validation in the function itself, but we're doing our part in the form itself
}

export default NumberForm;
