import React from 'react';

const styles = {
  card: {
    minWidth: 275,
    backgroundColor: 'white',
    color: 'black',
    margin: 10,
    padding: 10,
  },
  title: {
    textSize: 20,
  },
  desc: {
    textSize: 14,
  },
}

const Card = (props) => (
  <div style={styles.card}>
    <span style={styles.title}>{props.title}</span>
    <br />
    <span style={styles.desc}>{props.desc}</span>
  </div>
);

export default Card;
