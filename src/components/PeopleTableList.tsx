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
        <table className="min-w-full table-auto bg-white border border-gray-300 shadow-lg">
          <thead>
            <tr className="bg-gray-100 text-center">
              <th className="border border-gray-400 p-2 whitespace-nowrap">
                Name
              </th>
              <th className="border border-gray-400 p-2 whitespace-nowrap">
                Height
              </th>
              <th className="border border-gray-400 p-2 whitespace-nowrap">
                Mass
              </th>
              <th className="border border-gray-400 p-2 whitespace-nowrap">
                Birth Year
              </th>
              <th className="border border-gray-400 p-2 whitespace-nowrap">
                Eye color
              </th>
              <th className="border border-gray-400 p-2 whitespace-nowrap">
                Hair color
              </th>
              <th className="border border-gray-400 p-2 whitespace-nowrap">
                Skin color
              </th>
            </tr>
          </thead>
          <tbody>
            {people?.results.map((person) => (
              <PeopleTableRow data={person} key={Math.random()} />
            ))}
          </tbody>
        </table>
        {isError && <ErrorMessage />}
      </div>
      <Pagination totalPages={totalPages} />
    </div>
  );
};
