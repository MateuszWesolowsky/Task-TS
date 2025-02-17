import axios from 'axios';
import { PeopleResponse } from '../types/types';

const peopleApi = axios.create({
  baseURL: 'https://swapi.dev/api',
});

export const fetchPeople = async (
  search: string,
  page: number,
): Promise<PeopleResponse> => {
  const { data } = await peopleApi.get('/people/', {
    params: { search, page },
  });
  return data;
};
