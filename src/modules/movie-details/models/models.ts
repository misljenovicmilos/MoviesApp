export type MovieDetails = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: Collection[];
  budget: number;
  genres: Genres[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompanies[];
  production_countries: ProductionCountries[];
  release_date: Date;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguages[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
export type Genres = {
  id: number;
  name: string;
};

export type Collection = {
  backdrop_path: string;
  id: number;
  name: string;
  poster_path: string;
};
export type ProductionCompanies = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};
export type ProductionCountries = {
  iso_3166_1: string;
  name: string;
};
export type SpokenLanguages = {
  english_name: string;
  iso_639_1: string;
  name: string;
};
export type Error = {
  status_code: number;
  status_message: string;
  success: boolean;
};
