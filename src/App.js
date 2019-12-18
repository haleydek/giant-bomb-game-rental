import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import SearchContainer from './search/container';

function App() {
  return (
      <Container className="App">
        <SearchContainer />
      </Container>
  );
}

export default App;
