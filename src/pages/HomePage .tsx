import { FilterInput } from '../components/FilterInput';
import { Header } from '../components/Header';
import { Pagination } from '../components/Pagination';
import { PeopleTableList } from '../components/PeopleTableList';
import { usePeopleStore } from '../store/usePeopleStore';
import { useDebounce } from '../hooks/useDebounce';
import { useFetchPeople } from '../hooks/useFetchPeople';

export const HomePage = () => {
  const { search, page } = usePeopleStore();
  const debouncedSearch = useDebounce(search, 500);
  const { people, isLoading, isError } = useFetchPeople(debouncedSearch, page);

  return (
    <div className="p-2 sm:p-4 mt-8">
      <Header
        title={'Star Wars Data Explorer'}
        description={
          'Poznaj wszechświat Gwiezdnych Wojen! Przeglądaj dane dotyczące postaci. Skorzystaj z zakładek, aby przełączać się między kategoriami i odkrywać fascynujące informacje.'
        }
      />
      <FilterInput />
      <PeopleTableList
        people={people}
        isLoading={isLoading}
        isError={isError}
      />
      <Pagination data={people} />
    </div>
  );
};
