import React, { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InputsStyle, BotaoLink } from './style'
import { cadastrar } from '../../store/reducers/tarefas'
import { useDispatch } from 'react-redux'

export const Inputs = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const cadastrarNovo = (event: FormEvent) => {
    event.preventDefault()

    dispatch(
      cadastrar({
        nome,
        email,
        telefone
      })
    )
    navigate('/')
  }

  return (
    <InputsStyle onSubmit={cadastrarNovo}>
      <input
        value={nome}
        onChange={({ target }) => {
          const inputTexto = target.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '') // Remove números e caracteres especiais
          setNome(inputTexto)
        }}
        type="text"
        required
        placeholder="Nome"
      />

      <input
        value={email}
        onChange={({ target }) => setEmail(target.value)}
        type="email"
        required
        placeholder="E-mail"
      />
      <input
        value={telefone}
        onChange={({ target }) => {
          const inputTelefone = target.value.replace(/\D/g, '')
          setTelefone(inputTelefone)
        }}
        type="tel"
        required
        placeholder="Telefone"
      />

      <div>
        <button type="submit">Cadastrar</button>
        <BotaoLink to="/">Cancelar</BotaoLink>
      </div>
    </InputsStyle>
  )
}
