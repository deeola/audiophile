import { get_Data, set_loading, set_cartItems } from "../types";
// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case get_Data:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case set_cartItems:
      return {
        ...state,
        cartItems: action.payload,
      };

    case set_loading:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
