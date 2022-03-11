import { GenresActionTypes, GenresType } from "modules/genres";

export type GenersActions =
  | { type: typeof GenresActionTypes.Success; payload: GenresType[] }
  | { type: typeof GenresActionTypes.Error; payload: string }
  | { type: typeof GenresActionTypes.Request };
