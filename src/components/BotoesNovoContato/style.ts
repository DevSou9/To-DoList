import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const BotoesContatoStyle = styled.div`
  margin-top: 16px;
  width: 400px;
  margin-left: 16px;
  display: flex;
  justify-content: center;
  border: solid 1px red;

  button {
    width: 96px;
    font-size: 16px;
    border-radius: 8px;
    border: none;
    margin: 0 32px;
    padding: 8px 12px;
    border: none;
    cursor: pointer;
    background-color: #ccc;
  }
`
export const BotaoCancelar = styled(Link)`
  width: 96px;
  border-radius: 8px;
  border: none;
  margin: 0 32px;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #ccc;
  text-decoration: none;
  color: #000;
  text-align: center;
  font-size: 16px;
`
