import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const BoilingVerdict = (props) => {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>
  }
  return <p>The water would not boil.</p>
}

ReactDOM.render(
  <BoilingVerdict />,
  document.getElementById('root')
);
