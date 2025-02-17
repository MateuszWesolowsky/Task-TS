import { ErrorMessage } from './ErrorMessage';
import { Spinner } from './Spinner';

interface CharacterDetailsProps {
  details?: {
    name: string;
    gender: string;
    homeworld: string;
    films: string[];
    vehicles: string[];
  };
  isError?: boolean;
  isLoading: boolean;
}

export const CharacterDetails = ({
  details,
  isError,
  isLoading,
}: CharacterDetailsProps) => {
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full bg-white border border-gray-300 shadow-lg">
        <thead>
          <tr className="bg-gray-100 text-center">
            <th className="border border-gray-400 p-2">Name</th>
            <th className="border border-gray-400 p-2">Gender</th>
            <th className="border border-gray-400 p-2">Homeworld</th>
            <th className="border border-gray-400 p-2">List of films</th>
            <th className="border border-gray-400 p-2">List of vehicles</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className="border border-gray-400 p-2">{details?.name}</td>
            <td className="border border-gray-400 p-2">{details?.gender}</td>
            <td className="border border-gray-400 p-2">{details?.homeworld}</td>
            <td className="border border-gray-400 p-2">
              {details?.films?.map((el, i) => (
                <li key={i} className="list-none">
                  {el}
                </li>
              ))}
            </td>
            <td className="border border-gray-400 p-2">
              {details?.vehicles?.map((el, i) => (
                <li key={i} className=" list-none">
                  {el}
                </li>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
      {isError && <ErrorMessage />}
    </div>
  );
};
