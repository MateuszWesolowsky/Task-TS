import { useNavigate } from 'react-router-dom';
import { PeopleTableRowProps } from '../types/types';

export const PeopleTableRow = ({
  data: {
    name,
    height,
    mass,
    birth_year,
    eye_color,
    hair_color,
    skin_color,
    url,
  },
}: PeopleTableRowProps) => {
  const navigate = useNavigate();

  const handleOnClick = (url: string) => {
    const parts = url.split('/');
    const id = parts[parts.length - 2];
    navigate(`/people/${id}`);
  };

  return (
    <tr
      className="text-center transition-colors duration-200 hover:bg-indigo-100 cursor-pointer even:bg-gray-50"
      onClick={() => handleOnClick(url)}
    >
      <td className="border border-gray-300 p-2 whitespace-nowrap">{name}</td>
      <td className="border border-gray-300 p-2 whitespace-nowrap">
        {height} cm
      </td>
      <td className="border border-gray-300 p-2 whitespace-nowrap">
        {mass} kg
      </td>
      <td className="border border-gray-300 p-2 whitespace-nowrap">
        {birth_year}
      </td>
      <td className="border border-gray-300 p-2 whitespace-nowrap">
        {eye_color}
      </td>
      <td className="border border-gray-300 p-2 whitespace-nowrap">
        {hair_color}
      </td>
      <td className="border border-gray-300 p-2 whitespace-nowrap">
        {skin_color}
      </td>
    </tr>
  );
};
