import { Button } from './Button';
import { usePeopleStore } from '../store/usePeopleStore';
import { PeopleResponse } from '../types/types';

interface Props {
  data: PeopleResponse | undefined;
}

export const Pagination = ({ data }: Props) => {
  const { page, setPage } = usePeopleStore();

  const totalPages = Math.ceil((data?.count || 1) / 10);

  const handlePreviousePageClick = () => {
    setPage(page - 1);
  };

  const handleNextPageClick = () => {
    setPage(page + 1);
  };

  return (
    <div className="flex gap-4 justify-center items-center mt-4">
      <Button onClick={handlePreviousePageClick} disabled={page === 1}>
        Previous
      </Button>
      <p className="text-center">
        Page {page} of {totalPages}
      </p>
      <Button onClick={handleNextPageClick} disabled={page === totalPages}>
        Next
      </Button>
    </div>
  );
};
