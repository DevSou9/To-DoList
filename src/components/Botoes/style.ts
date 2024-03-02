import styled from 'styled-components'
import { Props } from '.'
import variaveis from '../../styles/variaveis'

export const DivBotaoStyle = styled.div`
  display: flex;
`
export const BotoesStyle = styled.button<Props>`
  min-width: 96px;
  width: 96px;
  height: 32px;
  border-radius: 8px;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${(props) =>
    props.tipo === 'Editar'
      ? `${variaveis.botaoEditar}`
      : `${variaveis.botaoRemover}`};
  color: #fff;
  font-size: 16px;
  margin: 0 8px 0 16px;
`
