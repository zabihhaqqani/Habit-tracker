// import { PureComponent } from "react/cjs/react.production.min";
// import { ProductsContext } from "../ProductsContext";

export default function ProductReducer(state, action) {
  switch (action.type) {
    case "EDIT_HABIT":
      console.log(action.payload);
      return {
        ...state,
        habitsData: state?.habitsData?.map((data) =>
          data.id === action.payload ? { ...data, isEdit: true } : data
        ),
      };

    case "EDITED_HABIT":
      return {
        ...state,
        habitsData: action.payload,
      };
    case "CANCEL_HABIT":
      return {
        ...state,
        habitsData: state?.habitsData?.map((data) =>
          data.id === action.payload ? { ...data, isEdit: false } : data
        ),
      };
    case "DELETE_HABIT":
      return {
        ...state,
        habitsData: state?.habitsData?.filter(
          (data) => data.id !== action.payload
        ),
      };
    case "ADD_NEW_HABIT":
      // console.log("workg");
      return {
        ...state,
        habitsData: [...state?.habitsData, action.payload],
      };
    case "ADD_NEW_ARCHIVE":
      console.log(action.payload);
       return {
         ...state,
         archiveData:[...state?.archiveData,action.payload]
       }
    default:
      return state;
  }
  // return state
}
