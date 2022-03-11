export type UserData = {
  id: number;
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  include_adult: boolean;
  username: string;
};
export interface AuthState {
  isLoading: boolean;
  authData: UserData;
  error?: string;
}
