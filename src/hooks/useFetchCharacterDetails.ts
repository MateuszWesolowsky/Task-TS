import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { fetchCharacterDetails } from '../api/deatilsApi';

export const useFetchCharacterDetails = (id?: string) => {
  return useQuery({
    queryKey: ['character', id],
    queryFn: () => fetchCharacterDetails(id!),
    placeholderData: keepPreviousData,
    enabled: !!id,
    retry: 1,
    staleTime: 60_000,
  });
};
