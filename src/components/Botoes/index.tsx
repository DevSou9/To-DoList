import React from 'react'
import { BotoesStyle } from './style'

export type Props = {
  children: string
  tipo: 'Editar' | 'Remover'
  funcao?: (numeroId?: number) => void
  key?: number
  keyRemover?: string
}

export const Botoes = (props: Props) => {
  return (
    <BotoesStyle
      onClick={() => props.funcao && props.funcao(props.key)}
      tipo={props.tipo}
      key={props.key}
      type="button"
    >
      {props.children}
    </BotoesStyle>
  )
}
