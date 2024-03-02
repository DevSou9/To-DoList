import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const HomeStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  margin-top: 24px;
  color: ${variaveis.li};

  h2 {
    margin-bottom: 24px;
    color: ${variaveis.titulo};
  }
`
export const DivLiStyle = styled.div`
  display: flex;

  div {
    max-width: 980px;
    width: 100%;
  }
`
