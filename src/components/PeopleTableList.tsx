import { PeopleTableRow } from './PeopleTableRow';
import { Spinner } from '../components/Spinner';
import { ErrorMessage } from '../components/ErrorMessage';
import { Pagination } from './Pagination';
import { usePeopleStore } from '../store/usePeopleStore';
import { useDebounce } from '../hooks/useDebounce';
import { useFetchPeople } from '../hooks/useFetchPeople';

export const PeopleTableList = () => {
  const { search, page } = usePeopleStore();
  const debouncedSearch = useDebounce(search, 500);
  const { people, isLoading, isError } = useFetchPeople(debouncedSearch, page);

  if (isLoading) {
    return <Spinner />;
  }

  const totalPages = Math.ceil((people?.count || 1) / 10);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto bg-white border border-gray-200">
          <thead>
            <tr className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white text-center">
              {[
                'Name',
                'Height',
                'Mass',
                'Birth Year',
                'Eye Color',
                'Hair Color',
                'Skin Color',
              ].map((heading) => (
                <th key={heading} className="p-3 border border-gray-300">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {people?.results.map((person, index) => (
              <PeopleTableRow data={person} key={person.name + index} />
            ))}
          </tbody>
        </table>
        {isError && <ErrorMessage />}
      </div>
      <Pagination totalPages={totalPages} />
    </div>
  );
};
