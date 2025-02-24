import { FilterInput } from '../components/FilterInput';
import { Header } from '../components/Header';
import { PeopleTableList } from '../components/PeopleTableList';

export const HomePage = () => {
  return (
    <div className="p-2 sm:p-4">
      <Header
        title={'Star Wars Data Explorer'}
        description={
          'Poznaj wszechświat Gwiezdnych Wojen! Przeglądaj dane dotyczące postaci. Skorzystaj z zakładek, aby przełączać się między kategoriami i odkrywać fascynujące informacje.'
        }
      />
      <FilterInput />
      <PeopleTableList />
    </div>
  );
};
