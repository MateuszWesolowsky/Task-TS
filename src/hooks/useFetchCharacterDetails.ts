import { useQuery } from '@tanstack/react-query';
import { fetchCharacterDetails } from '../api/deatilsApi';

export const useFetchCharacterDetails = (id?: string) => {
  return useQuery({
    queryKey: ['character', id],
    queryFn: () => fetchCharacterDetails(id!),
    enabled: !!id,
    retry: 1,
    staleTime: 60_000,
  });
};
