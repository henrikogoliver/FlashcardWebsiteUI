import React from 'react';
import './App.css';
import { Button, Container } from 'react-bootstrap';
import FlashcardCard from './components/flashcard_card/FlashcardCard.component';

function App() {
  return (
    <Container style={{ marginTop: '8px' }}>
      <FlashcardCard />
    </Container>
  );
}

export default App;
