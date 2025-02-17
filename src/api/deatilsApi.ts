import axios from 'axios';
import { CharacterDetails } from '../types/types';

const detailsApi = axios.create({
  baseURL: 'https://swapi.dev/api',
});

export const fetchCharacterDetails = async (
  id: string,
): Promise<CharacterDetails> => {
  const { data } = await detailsApi.get(`/people/${id}`);
  return data;
};
