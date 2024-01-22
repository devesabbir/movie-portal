export const ADD_TO_CART = "cine/add_to_cart";
export const REMOVE_FROM_CART = "cine/remove_from_cart";

export const CineReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return [...state, action.payload];
    }
    case REMOVE_FROM_CART: {
      return state.filter((item) => item.id !== action.id);
    }
    default: {
      throw new Error("Invalid action type");
    }
  }
};
