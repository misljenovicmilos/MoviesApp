export type GenresType = {
  id: number;
  name: string;
};
export interface GenresState {
  isLoading: boolean;
  genresData: GenresType[];
  error?: string;
}
