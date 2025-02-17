import { useQuery } from '@tanstack/react-query';
import { fetchPeople } from '../api/peopleApi';
import { usePeopleStore } from '../store/usePeopleStore';
import { PeopleResponse } from '../types/types';

export const useFetchPeople = (search: string, page: number) => {
  const { setCount } = usePeopleStore();
  const {
    data: people,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['people', search, page],
    queryFn: () => fetchPeople(search, page),
    keepPreviousData: true,
    retry: 1,
    staleTime: 60_000,
    onSuccess: (people: PeopleResponse) => {
      if (!setCount) return;
      setCount(people.count);
    },
  });

  return { people, isLoading, isError };
};
