import client from './client'

const fetchPokemonStart= () => ({
  type: 'FETCH_POKEMON_START'
})

const fetchPokemonSuccess= items => ({
  type: 'FETCH_POKEMON_SUCCESS', items
})

const fetchPokemonError= error => ({
  type: 'FETCH_POKEMON_ERROR', error
})

export const fetchPokemon = () => {
  return async dispatch => {
    try {
      dispatch(fetchPokemonStart())
      const{data} = await client.get('/pokemon')
      dispatch(fetchPokemonSuccess(data.results))
    } catch (error){
      dispatch(fetchPokemonError(error))
    }
  }
}
export const addItem = (item) => ({ type: 'ADD_ITEM', item})
export const setCheck = (id) => ({ type: 'SET_CHECK', id})
export const deleteItem = (id) => ({ type: 'DELETE_ITEM', id})

