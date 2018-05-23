import axios, { AxiosPromise } from 'axios';
import { IMovieObject } from './../components/movie-card/movie-card.component';

export interface IMoviesListRequest {
  filter?: string[];
  limit?: number;
  offset?: number;
  search?: string;
  searchBy?: 'title' | 'genre';
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}
export interface IMoviesListResponse {
  data: IMovieObject[];
  limit: number;
  offset: number;
  total: number;
}
export interface IMovieDetailsRequest {
  id?: number;
}
export interface IMovieDetailsResponse extends IMovieObject {
  id: number;
}

const apiUrl = 'http://react-cdp-api.herokuapp.com/';

export const getMoviesList = (params: IMoviesListRequest) =>
  axios.get(`${apiUrl}/movies`, { params }) as AxiosPromise<IMoviesListResponse>;
