import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { fetchPeople } from '../api/peopleApi';
import { usePeopleStore } from '../store/usePeopleStore';
import { useEffect } from 'react';

export const useFetchPeople = (search: string, page: number) => {
  const { setCount } = usePeopleStore();
  const {
    data: people,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['people', search, page],
    queryFn: () => fetchPeople(search, page),
    placeholderData: keepPreviousData,
    retry: 1,
    staleTime: 60_000,
  });

  useEffect(() => {
    if (!people) return;
    setCount(people?.count);
  }, [people, setCount]);

  return { people, isLoading, isError };
};
