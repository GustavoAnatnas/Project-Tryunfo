import React from 'react';

class Form extends React.Component {
  render() {
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
            name="CheckBox"
            id="check"
            data-testid="trunfo-input"
          />
          Super Trybe Trunfo
        </label>
        <br />
        <br />
        <button
          type="submit"
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
