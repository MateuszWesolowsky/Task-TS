import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { fetchPeople } from '../api/peopleApi';

export const useFetchPeople = (search: string, page: number) => {
  const {
    data: people,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['people', search, page],
    queryFn: () => fetchPeople(search, page),
    placeholderData: keepPreviousData,
    retry: 1,
  });

  return { people, isLoading, isError };
};
