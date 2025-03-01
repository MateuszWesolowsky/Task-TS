import { usePeopleStore } from '../store/usePeopleStore';

export const FilterInput = () => {
  const { search, setSearch } = usePeopleStore();
  return (
    <div className="w-full sm:w-fit mb-3">
      <input
        type="text"
        value={search}
        placeholder="Search by name"
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
      />
    </div>
  );
};
