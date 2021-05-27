import { ADD_ITEM, SET_CHECK, DELETE_ITEM } from "../constants/rootConstants";

const adrian = {
  id: 1,
  name: "Adrian",
  color: "red",
  description: "Lorem Ipsum ",
  checked: true,
};
const oscar = {
  id: 2,
  name: "Oscar",
  color: "blue",
  description: "Lorem Ipsum ",
  checked: true,
};
const edson = {
  id: 3,
  name: "Edson",
  color: "green",
  description: "Lorem Ipsum ",
  checked: true,
};
const carlos = {
  id: 4,
  name: "Carlos",
  color: "cyan",
  description: "Lorem Ipsum ",
  checked: true,
};
const jimmy = {
  id: 5,
  name: "Jimmy",
  color: "magenta",
  description: "Lorem Ipsum ",
  checked: true,
};

const initialState = {
  title: "React Class",
  reactClass: [adrian, oscar, edson, carlos, jimmy],
  current_id: 6,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM : {
      return {
        ...state,
        reactClass: [
          ...state.reactClass,
          { ...action.item, id: state.current_id },
        ],
        current_id: state.current_id + 1,
      };
    }
    case SET_CHECK: {
      const filtered = state.reactClass.map((checkbox) => {
        if (checkbox.id !== action.id) {
          return checkbox;
        }
        return {
          ...checkbox,
          checked: checkbox.checked ? false : true,
        };
      });
      console.log(filtered);
      const newState = { ...state, reactClass: filtered };
      return newState;
    }
    case DELETE_ITEM: {
      const filter = (item) => {
        if (item.id !== action.id) {
          return item;
        }
      }
      const filtered = state.reactClass.filter(filter);
      const newState = { ...state, reactClass: filtered };
      return newState;
    }
    default:
      return state;
  }
};

export default Reducer
