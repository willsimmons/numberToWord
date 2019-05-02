// just doing a simple render test, not adding something like enzyme or react testing app to handle shallow mounting
import React from 'react';
import ReactDOM from 'react-dom';
import NumberForm from './NumberForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NumberForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
