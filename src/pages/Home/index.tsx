import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootReducer } from '../../store'
import { BotoesAdd } from '../../components/BotoesAdd'
import { Botoes } from '../../components/Botoes'
import { Editar } from '../../containers/Editar'
import { remover } from '../../store/reducers/tarefas'
import { DivLiStyle, HomeStyled } from './style'

export const Home = () => {
  const tarefas = useSelector((state: RootReducer) => state.tarefas.itens)
  const [editandoId, setEditandoId] = useState<number | null>(null)
  const dispatch = useDispatch()

  const toggleEditar = (id: number) => {
    if (editandoId === id) {
      setEditandoId(null)
    } else {
      setEditandoId(id)
    }
  }

  const handleRemover = (id: number) => {
    dispatch(remover(id))
  }

  return (
    <HomeStyled>
      <h2>Usuários Cadastrados</h2>
      <ul>
        {tarefas.map((cadastro) => (
          <li key={cadastro.id}>
            {editandoId !== cadastro.id && (
              <DivLiStyle>
                <div>
                  {cadastro.nome} - {cadastro.email} - {cadastro.telefone}
                </div>
                <Botoes
                  tipo="Editar"
                  funcao={() => toggleEditar(cadastro.id)}
                  key={cadastro.id}
                >
                  Editar
                </Botoes>
                <Botoes
                  tipo="Remover"
                  funcao={() => handleRemover(cadastro.id)}
                  keyRemover={`${cadastro.id}`}
                >
                  Remover
                </Botoes>
              </DivLiStyle>
            )}
            {editandoId === cadastro.id && (
              <Editar
                contatos={cadastro}
                closeEdit={() => setEditandoId(null)}
              />
            )}
          </li>
        ))}
      </ul>
      <BotoesAdd />
    </HomeStyled>
  )
}
