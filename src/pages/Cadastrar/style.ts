import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const CadastraStyle = styled.div`
  margin-top: 32px;
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;

  h2 {
    margin-bottom: 32px;
    color: ${variaveis.titulo};
  }
`
