import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const produtoExistente = state.itens.find((p) => p.id === produto.id)

      if (produtoExistente) {
        state.itens = state.itens.filter((p) => p.id !== produto.id) // Remove o produto dos favoritos
      } else {
        state.itens.push(produto) // Adiciona o produto aos favoritos
      }
    }
  }
})

export const { adicionar } = favoritosSlice.actions //exportando a ação ADICIONAR
export default favoritosSlice.reducer //EXPORTAÇAO PADRAO DEFAULT

/*function favoritar(produto: Produto) {
  if (favoritos.find((p) => p.id === produto.id)) {
    const favoritosSemProduto = favoritos.filter((p) => p.id !== produto.id)
    setFavoritos(favoritosSemProduto)
  } else {
    setFavoritos([...favoritos, produto])
  }
}*/
