import React, { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { editar } from '../../store/reducers/tarefas'
import { Contatos } from '../../models/Tarefas'
import { BotaoStyleEditar, InputStyle } from './style'
export type Props = {
  contatos: Contatos
  closeEdit: () => void
}

export const Editar = ({ contatos, closeEdit }: Props) => {
  const [nome, setNome] = useState(contatos.nome)
  const [email, setEmail] = useState(contatos.email)
  const [telefone, setTelefone] = useState(contatos.telefone)
  const id: number = Number(contatos.id)
  const dispatch = useDispatch()

  const editarContato = (event: FormEvent) => {
    event.preventDefault()

    dispatch(editar({ id, nome, email, telefone }))
    closeEdit()
  }
  const fecharContato = () => {
    closeEdit()
  }

  return (
    <form>
      <InputStyle
        value={nome}
        onChange={({ target }) => {
          const inputTexto = target.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '') // Remove números e caracteres especiais
          setNome(inputTexto)
        }}
        type="text"
        required
        placeholder={contatos.nome}
      />

      <InputStyle
        value={email}
        onChange={({ target }) => setEmail(target.value)}
        type="email"
        required
        placeholder={contatos.email}
      />
      <InputStyle
        value={telefone}
        onChange={({ target }) => {
          const inputTelefone = target.value.replace(/\D/g, '')
          setTelefone(inputTelefone)
        }}
        type="tel"
        required
        placeholder={contatos.telefone}
      />
      <BotaoStyleEditar tipo="Salvar" type="submit" onClick={editarContato}>
        Salvar
      </BotaoStyleEditar>
      <BotaoStyleEditar tipo="Cancelar" type="button" onClick={fecharContato}>
        Cancelar
      </BotaoStyleEditar>
    </form>
  )
}
