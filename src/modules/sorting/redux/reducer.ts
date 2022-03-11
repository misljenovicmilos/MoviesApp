import { SortingActions, SortingRated, SortingTypes } from "modules/sorting";

const INITIAL_STATE: SortingRated = {
  order: "asc",
};
export const sortingReducer = (
  state = INITIAL_STATE,
  action: SortingActions
): SortingRated => {
  switch (action.type) {
    case SortingTypes.Sorting:
      return {
        ...state,
        order: action.payload,
      };
    default:
      return state;
  }
};
