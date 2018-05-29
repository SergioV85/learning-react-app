import axios, { AxiosPromise } from 'axios';
import { IMovieObject } from './../components/movie-details/movie-details.component';

export interface IMoviesListRequest {
  filter?: string[];
  limit?: number;
  offset?: number;
  search?: string;
  searchBy?: 'title' | 'genres';
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}
export interface IMoviesListResponse {
  data: IMovieObject[];
  limit: number;
  offset: number;
  total: number;
}

const apiUrl = 'http://react-cdp-api.herokuapp.com';

export const getMoviesList = (params: IMoviesListRequest) =>
  axios.get(`${apiUrl}/movies`, { params }) as AxiosPromise<IMoviesListResponse>;

export const getMovieDetails = (id: number) =>
  axios.get(`${apiUrl}/movies/${id}`) as AxiosPromise<IMovieObject>;
