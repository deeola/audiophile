import { get_Data, set_loading } from "../types";

export default (state, action) => {
  switch (action.type) {
    case get_Data:
      return {
        ...state,
        data: action.payload,
        loading:false
      }

    case set_loading:
      return{
        ...state,
        loading:true
      }
    

    default:
      return state;
  }
};
