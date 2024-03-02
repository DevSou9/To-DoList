import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
export type Props = {
  tipo: 'Salvar' | 'Cancelar'
}

export const BotaoStyleEditar = styled.button<Props>`
  min-width: 96px;
  width: 96px;
  height: 32px;
  border-radius: 8px;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${(props) =>
    props.tipo === 'Salvar'
      ? `${variaveis.botaoSalvar}`
      : `${variaveis.botaoCancelar}`};
  color: #fff;
  font-size: 16px;
  margin: 0 8px 0 16px;
`

export const InputStyle = styled.input`
  color: ${variaveis.li};
  padding: 8px;
  border-radius: 16px;
  border: solid 0.7px ${variaveis.inputEditar};
  margin-left: 8px;
`
