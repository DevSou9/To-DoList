import React from 'react'
// import { Container } from '../../styles'
import { Inputs } from '../../components/Inputs'

import { EstiloGlobal } from '../../styles'
import { CadastraStyle } from './style'
export const Cadastrar = () => {
  return (
    <>
      <EstiloGlobal />

      <div>
        <CadastraStyle>
          <h2>Nova Cadastro</h2>
          <Inputs />
        </CadastraStyle>
      </div>
    </>
  )
}
