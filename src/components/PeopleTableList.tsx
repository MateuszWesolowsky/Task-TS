import { PeopleTableRow } from './PeopleTableRow';
import { Spinner } from '../components/Spinner';
import { ErrorMessage } from '../components/ErrorMessage';
import { PeopleResponse } from '../types/types';

type PeopleTableListProps = {
  people: PeopleResponse | undefined;
  isLoading: boolean;
  isError: boolean;
};

export const PeopleTableList = ({
  people,
  isLoading,
  isError,
}: PeopleTableListProps) => {
  if (isLoading) {
    return <Spinner />;
  }

  return (
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
  );
};
