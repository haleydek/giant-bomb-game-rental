import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import SearchForm from './search/form';

function App() {
  return (
      <Container className="App">
        <SearchForm/>
      </Container>
  );
}

export default App;
