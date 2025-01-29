import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../App'

interface ProdutosState {
  carrinho: Produto[]
  lista: Produto[]
  favoritos: Produto[]
}

const initialState: ProdutosState = {
  carrinho: [],
  lista: [],
  favoritos: []
}

const produtosSlice = createSlice({
  name: 'produtos',
  initialState,
  reducers: {
    adicionarAoCarrinho(state, action: PayloadAction<Produto>) {
      if (state.carrinho.find((p) => p.id === action.payload.id)) {
        alert('Item já adicionado')
      } else {
        state.carrinho.push(action.payload)
      }
    },
    removeDoCarrinho(state, action: PayloadAction<number>) {
      state.carrinho = state.carrinho.filter((p) => p.id !== action.payload)
    },
    adicionarLista(state, action: PayloadAction<Produto[]>) {
      state.lista = action.payload
    },
    adicionarFavorito(state, action: PayloadAction<Produto>) {
      if (state.favoritos.find((p) => p.id == action.payload.id)) {
        state.favoritos = state.favoritos.filter(
          (p) => p.id !== action.payload.id
        )
      } else {
        state.favoritos.push(action.payload)
      }
    }
  }
})

export const {
  adicionarAoCarrinho,
  removeDoCarrinho,
  adicionarLista,
  adicionarFavorito
} = produtosSlice.actions
export default produtosSlice.reducer
