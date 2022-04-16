import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);

    this.state = {
      nome: '',
      description: '',
      attr1: '',
      attr2: '',
      attr3: '',
      image: '',
      rare: 'normal',
      trunfo: false,
      hasTrunfo: false,
      // isSaveButtonDisabled: false,
      decks: [],
    };
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  onSaveButtonClick() {
    const {
      nome,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rare,
      trunfo,
      decks,
    } = this.state;

    const card = {
      nome,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rare,
      trunfo,
    };

    if (trunfo === true) {
      this.setState(() => ({
        hasTrunfo: true,
      }));
    }

    decks.push(card);

    this.setState({
      nome: '',
      description: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      image: '',
      rare: 'normal',
      trunfo: false,
    });
  }

  saveButtonDisabled = () => {
    const {
      nome,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rare,
    } = this.state;

    const maxValue = 210;
    const maxAttr = 90;

    if (nome === '' || description === '' || image === '' || rare === ''
    || attr1 > maxAttr || attr1 < 0 || attr2 > maxAttr || attr2 < 0
    || attr3 > maxAttr || attr3 < 0
    || parseInt(attr1, 10) + parseInt(attr2, 10)
    + parseInt(attr3, 10) > maxValue
    ) {
      return true;
    }
    return false;
  }

  render() {
    const {
      nome,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rare,
      trunfo,
      hasTrunfo,
      // isSaveButtonDisabled,
      decks,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo.</h1>
        <Form
          cardName={ nome }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ this.saveButtonDisabled() }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ nome }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
          hasTrunfo={ hasTrunfo }
          onInputChange={ this.onInputChange }
        />
        { decks.map((deck) => (<Card
          key={ deck.nome }
          cardName={ deck.nome }
          cardDescription={ deck.description }
          cardImage={ deck.image }
          cardAttr1={ deck.attr1 }
          cardAttr2={ deck.attr2 }
          cardAttr3={ deck.attr3 }
          cardRare={ deck.rare }
          cardTrunfo={ deck.trunfo }
        />))}
      </div>
    );
  }
}

export default App;
