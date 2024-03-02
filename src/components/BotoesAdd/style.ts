import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const BotoesAddStyle = styled(Link)`
  height: 72px;
  width: 72px;
  position: fixed;
  bottom: 48px;
  right: 48px;
  border-radius: 50%;
  background-color: ${variaveis.botaoSalvar};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-decoration: none;
`
