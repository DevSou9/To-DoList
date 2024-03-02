import styled from 'styled-components'
import { Link } from 'react-router-dom'
import variaveis from '../../styles/variaveis'
export const InputsStyle = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;

  input {
    width: 400px;
    height: 36px;
    display: block;
    margin-top: 0;
    margin-bottom: 16px;
    border-radius: 16px;
    padding-left: 16px;
    border: none;
    background-color: ${variaveis.input};
  }

  button {
    width: 96px;
    height: 32px;
    border-radius: 8px;
    padding: 8px 12px;
    border: none;
    cursor: pointer;
    background-color: ${variaveis.botaoSalvar};
    color: #fff;
    font-size: 16px;
    margin-right: 24px;
  }

  div {
    display: flex;
    justify-content: space-between;
    margin-top: 32px;
  }
`
export const BotaoLink = styled(Link)`
  font-size: 16px;
  width: 96px;
  height: 32px;
  border-radius: 8px;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.botaoRemover};
  text-decoration: none;
  color: #fff;
  text-align: center;
  font-size: 16px;
`
