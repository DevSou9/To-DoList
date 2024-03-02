import React from 'react'
import { BotoesContatoStyle, BotaoCancelar } from './style'

export const BotoesNovoContato = () => {
  return (
    <BotoesContatoStyle>
      <BotaoCancelar to="/">Cancelar</BotaoCancelar>
    </BotoesContatoStyle>
  )
}
