import React from 'react';
import ReactDOM from 'react-dom';

function App(): JSX.Element {
  return (
    <h1>Welcome to Typescript</h1>
  );
}

const initialNode = document.getElementById('app');

ReactDOM.render(<App />, initialNode);
