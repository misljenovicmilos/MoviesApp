import { MoviesActionTypes, Movies } from "modules/movie-list";

export type MoviesActions =
  | { type: typeof MoviesActionTypes.Success; payload: Movies[] }
  | { type: typeof MoviesActionTypes.Error; payload: string }
  | { type: typeof MoviesActionTypes.Request }
  | { type: typeof MoviesActionTypes.Page; payload: number };
