export type Movies = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  genre_ids: number[];
  release_date: Date;
  original_language: number;
};
export interface MoviesState {
  isLoading: boolean;
  movieData: Movies[];
  error?: string;
  page: number;
}
