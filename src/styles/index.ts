import styled, { createGlobalStyle } from 'styled-components'

export const EstiloGlobal = createGlobalStyle`
*{
  max-width: 1386px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;


}
body {
  margin-left: auto;
  margin-right: auto;
}
li{
  padding: 16px;
  list-style: none;
  padding: 16px;
}

div{
  overflow-x: hidden;
}
`

export const Container = styled.div`
  max-width: 980px;
  display: flex;
  justify-content: center;
  margin-top: auto;
  margin-top: auto;
`
