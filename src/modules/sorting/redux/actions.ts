import { SortingTypes, Order } from "modules/sorting";

export type SortingActions = {
  type: typeof SortingTypes.Sorting;
  payload: Order;
};
