import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class Form extends React.Component {
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
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <Input
          name="nome"
          type="text"
          label="Nome"
          testid="name-input"
          value={ cardName }
          onChange={ onInputChange }
        />

        <hr width="30%" align="left" />

        <Input
          type="text"
          label="Descrição"
          testid="description-input"
          value={ cardDescription }
          name="description"
          onChange={ onInputChange }
        />

        <hr width="30%" align="left" />

        <Input
          label="Attr1"
          type="number"
          testid="attr1-input"
          placeholder="Vida"
          value={ cardAttr1 }
          name="attr1"
          onChange={ onInputChange }
        />

        <Input
          label="Attr2"
          type="number"
          testid="attr2-input"
          placeholder="Defesa"
          value={ cardAttr2 }
          name="attr2"
          onChange={ onInputChange }
        />

        <Input
          label="Attr3"
          type="number"
          testid="attr3-input"
          placeholder="Ataque"
          value={ cardAttr3 }
          name="attr3"
          onChange={ onInputChange }
        />

        <br />

        <Input
          label="Imagem"
          type="text"
          testid="image-input"
          value={ cardImage }
          name="image"
          onChange={ onInputChange }
        />

        <br />

        <label htmlFor="rare">
          Raridade
          <br />
          <select
            data-testid="rare-input"
            value={ cardRare }
            name="rare"
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        <br />

        <hr width="30%" align="left" />

        <input
          name="trunfo"
          type="checkbox"
          label="Super Trybe Trunfo"
          data-testid="trunfo-input"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />

        <br />
        <br />
        <label htmlFor="Salvar">
          <input
            value="Salvar"
            name="isSaveButtonDisabled"
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
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
