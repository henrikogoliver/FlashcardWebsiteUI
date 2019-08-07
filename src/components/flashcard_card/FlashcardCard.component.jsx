import React from 'react';
import axios from 'axios';

import { Card } from 'react-bootstrap';

import './FlashcardCard.css';

class FlashcardCard extends React.Component {
  state = {
    answerRevealed: false,
    flashcards: [],
  };

  handleReveal = () => {
    this.setState({ ...this.state, answerRevealed: true });
  };

  componentDidMount() {
    axios
      .get('https://localhost:44321/api/flashcards/20')
      .then(response => {
        console.log(response);
        this.setState({ ...this.state, flashcards: response.data });
      })
      .catch(error => console.log(error.message));
  }

  render() {
    return (
      <div>
      {this.state.flashcards.map(flashcard => 
        <Card key={flashcard.Id} style={{ minWidth: '18rem' }}>
          <Card.Body>
            <Card.Title>
              {flashcard.Question}
            </Card.Title>
            <Card.Text className={this.state.answerRevealed ? null : 'blurry-text'} onClick={this.handleReveal}>
              {flashcard.Answer}
            </Card.Text>
          </Card.Body>
        </Card>
      )}
      </div>
    );
  }
}

export default FlashcardCard;
