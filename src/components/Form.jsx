import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
//   constructor() {
//     super();

  //     this.onInputChange = this.onInputChange.bind(this);

  //     this.state = {
  //       cardName: '',
  //       cardDescription: '',
  //       cardImage: '',
  //       cardAttr1: '',
  //       cardAttr2: '',
  //       cardAttr3: '',
  //       cardRare: '',
  //       cardTrunfo: false,
  //       //   hasTrunfo: false,
  //       isSaveButtonDisabled: false,
  //     };
  //   }

  //   //   onInputChange(event) {
  //   //     this.setState({
  //   //       cardName: event.target.value,
  //   //     });
  //   //   }
  //   onInputChange({ target }) {
  //     const { name } = target;
  //     const value = target.type === 'checkbox' ? target.checked : target.value;

  //     this.setState({
  //       [name]: value,
  //     });
  //   }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      //   hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form action="">
        <label htmlFor="nomeCarta">
          Nome
          <br />
          <input
            id="nomeCarta"
            type="text"
            data-testid="name-input"
            placeholder="Nome da Carta"
            value={ cardName }
            name="cardName"
            onChange={ onInputChange }
          />
        </label>
        <br />
        <hr width="30%" align="left" />
        <label htmlFor="textArea">
          Descrição
          <br />
          <textarea
            id="textArea"
            type="text"
            data-testid="description-input"
            value={ cardDescription }
            name="cardDescription"
            onChange={ onInputChange }
          />
        </label>
        <br />
        <hr width="30%" align="left" />
        <label htmlFor="Attr01">
          Attr01
          <input
            id="Attr01"
            type="number"
            data-testid="attr1-input"
            placeholder="Vida"
            value={ cardAttr1 }
            name="cardAttr1"
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="Attr02">
          Attr02
          <input
            id="Attr02"
            type="number"
            data-testid="attr2-input"
            placeholder="Defesa"
            value={ cardAttr2 }
            name="cardAttr2"
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="Attr03">
          Attr03
          <input
            id="Attr03"
            type="number"
            data-testid="attr3-input"
            placeholder="Ataque"
            value={ cardAttr3 }
            name="cardAttr3"
            onChange={ onInputChange }
          />
          <br />
        </label>
        <br />
        <label htmlFor="Image">
          Imagem
          <input
            id="Image"
            type="text"
            data-testid="image-input"
            value={ cardImage }
            name="cardImage"
            onChange={ onInputChange }
          />
          <br />
        </label>
        <br />
        <label htmlFor="select">
          Raridade
          <br />
          <select
            id="select"
            data-testid="rare-input"
            value={ cardRare }
            name="cardRare"
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <br />
        <hr width="30%" align="left" />
        <label htmlFor="check">
          <input
            type="checkbox"
            id="check"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            name="cardTrunfo"
            onChange={ onInputChange }
          />
          Super Trybe Trunfo
        </label>
        <br />
        <br />
        <label htmlFor="Salvar">
          <input
            value="Salvar"
            type="button"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          />
        </label>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
//   hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
