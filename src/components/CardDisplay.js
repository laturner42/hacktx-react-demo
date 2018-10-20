import React, { Component } from 'react';

import SimpleCard from './SimpleCard';
import NewCardDialog from './NewCardDialog';

import { db } from './utils/Firebase';

export default class CardDisplay extends Component {

  state = {
    cards: [],
  }

  componentDidMount() {
    db.collection('cards').onSnapshot((snapshot) => {
      const cards = [];
      snapshot.forEach((doc) => {
        const card = doc.data();
        cards.push(card);
      });
      this.setState({
        cards: cards,
      })
    })
  }

  addNewCard = (title, desc) => {
    db.collection('cards').add({
      title,
      desc,
    });
  }

  render() {
    return (
      <div>
        <NewCardDialog
          addNewCard={this.addNewCard}
        />
        {
          this.state.cards.map((card) => (
            <SimpleCard
              title={card.title}
              desc={card.desc}
            />
          ))
        }
      </div>
    );
  }

}