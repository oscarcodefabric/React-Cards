import { ADD_ITEM, SET_CHECK, DELETE_ITEM } from "../constants/rootConstants";

const initialState = {
  title: "React Test 5",
  pokemon: [],
  current_id: 0,
  isLoadingItems: false,
  errorMessage: ''
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM : {
      return {
        ...state,
        pokemon: [
          ...state.pokemon,
          { ...action.item, id: state.current_id, checked: false },
        ],
        current_id: state.current_id + 1
      };
    }
    case SET_CHECK: {
      const filtered = state.pokemon.map((checkbox) => {
        if (checkbox.name !== action.id) {
          return checkbox;
        }
        if (checkbox.checked === undefined){
          return {
            ...checkbox,
            checked: true
          }
        }
        return {
          ...checkbox,
          checked: checkbox.checked ? false : true,
        };
      });
      console.log(filtered);
      const newState = { ...state, pokemon: filtered };
      return newState;
    }
    case 'FETCH_POKEMON_SUCCESS': {
      console.log(action.items)
      const pokemon = action.items
      return {
        ...state, pokemon: pokemon,
        isLoading: false
      }
    }

    case 'FETCH_POKEMON_START': {
      return {
        ...state, 
        errorMessage: '',
        pokemon: [],
        isLoading: true
      }
    }
    case 'FETCH_POKEMON_ERROR': {
      const {error} = action
      return {
        ...state, 
        errorMessage: error,
        isLoading: false
      }
    }
    case DELETE_ITEM: {
      console.log(action.id)
      const nameFilter = (poke) => {
        if (poke.name !== action.id) {
          return poke;
        }
      }
      const filtered = state.pokemon.filter(nameFilter);
      const newState = { ...state, pokemon: filtered };
      return newState;
    }
    
    default:
      return state;
  }
};

export default Reducer
