import { PayloadAction, createSlice } from '@reduxjs/toolkit' //PayloadAction
import { Contatos } from '../../models/Tarefas'

export type TypeContato = {
  itens: Contatos[]
}

export const initialState: TypeContato = {
  itens: [
    {
      id: 1,
      nome: 'Maria Silva',
      email: 'maria.silva@example.com',
      telefone: '1598765-4321'
    },
    {
      id: 2,
      nome: 'João Oliveira',
      email: 'joao.oliveira@example.com',
      telefone: '1199876-5432'
    },
    {
      id: 3,
      nome: 'Fulano Souza',
      email: 'fulanoteste@teste.com',
      telefone: '21999999999'
    },
    {
      id: 4,
      nome: 'Ana Santos',
      email: ' ana.santos@example.com',
      telefone: '2198765-1234'
    },
    {
      id: 5,
      nome: 'Pedro Almeida',
      email: 'p.almeida@example.com',
      telefone: '1199876-6543'
    },
    {
      id: 6,
      nome: ' Carlos Pereira',
      email: 'c.pereira@example.com',
      telefone: '4199876-8765'
    }
  ]
}

const cadastroSlice = createSlice({
  name: 'cadastrando',
  initialState,
  reducers: {
    listar: (state) => state,
    cadastrar: (state, action: PayloadAction<Omit<Contatos, 'id'>>) => {
      const id = state.itens.length + 1

      const novoCadastro = { ...action.payload, id }
      state.itens.push(novoCadastro)
    },
    editar: (state, action: PayloadAction<Contatos>) => {
      const indexCadastro = state.itens.findIndex(
        (item) => item.id === action.payload.id
      )
      if (indexCadastro >= 0) {
        state.itens[indexCadastro] = action.payload
      }
    },
    remover: (state, action: PayloadAction<number>) => {
      const index = state.itens.findIndex((item) => item.id === action.payload)
      if (index !== -1) {
        state.itens.splice(index, 1)
      }
    }
  }
})

export const { listar, cadastrar, editar, remover } = cadastroSlice.actions
export default cadastroSlice.reducer
