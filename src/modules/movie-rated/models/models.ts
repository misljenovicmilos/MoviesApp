import { GenresType } from "modules/genres";

export interface MoviesDetailsForRated {
  popularity: number;
  vote_count: number;
  video: boolean;
  poster_path: string;
  id: number;
  adult: boolean;
  original_language: string;
  original_title: string;
  genres: GenresType[];
  title: string;
  vote_average: number;
  overview: string;
  release_date: Date;
  rating: number;
}

export type AccountRating = {
  value: number;
  created_at: string;
};
