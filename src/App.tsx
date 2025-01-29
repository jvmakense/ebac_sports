import { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './store/store'
import {
  adicionarAoCarrinho,
  adicionarLista,
  adicionarFavorito
} from './store/produtosSlice'

import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const dispatch = useDispatch()
  const { carrinho, lista, favoritos } = useSelector(
    (state: RootState) => state.produtos
  )
  const produtos = lista

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/ebac_sports')
      .then((res) => res.json())
      .then((res) => dispatch(adicionarLista(res)))
  }, [dispatch])

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} itensNoCarrinho={carrinho} />
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          favoritar={(produto) => dispatch(adicionarFavorito(produto))}
          adicionarAoCarrinho={(produto) =>
            dispatch(adicionarAoCarrinho(produto))
          }
        />
      </div>
    </>
  )
}

export default App
