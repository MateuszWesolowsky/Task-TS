import { usePeopleStore } from '../store/usePeopleStore';

export const FilterInput = () => {
  const { search, setSearch } = usePeopleStore();
  return (
    <div className="w-fit mx-auto mb-3">
      <input
        type="text"
        value={search}
        placeholder="Search by name"
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2 text-gray-700 border rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
};
