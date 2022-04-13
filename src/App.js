import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);

    this.state = {
      nome: '',
      description: '',
      attr1: '',
      attr2: '',
      attr3: '',
      image: '',
      rare: '',
      trunfo: false,
      // hasTrunfo: ,
      // isSaveButtonDisabled: false,
    };
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  saveButtonDisable = () => {
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
          isSaveButtonDisabled={ this.saveButtonDisable() }
          onInputChange={ this.onInputChange }
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
      </div>
    );
  }
}

export default App;
