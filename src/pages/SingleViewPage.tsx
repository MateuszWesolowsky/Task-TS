import { useEffect } from 'react';
import { Header } from '../components/Header';
import { useParams } from 'react-router-dom';
import { CharacterDetails } from '../components/CharacterDetails';
import { useFetchCharacterDetails } from '../hooks/useFetchCharacterDetails';

export const SingleViewPage = () => {
  const { id } = useParams();

  const { data: details, isLoading, isError } = useFetchCharacterDetails(id);

  const title = details?.name;

  useEffect(() => {
    if (!title) return;
    document.title = `StarWars | ${title}`;
    return () => {
      document.title = 'StarWars Explorer';
    };
  }, [title]);

  return (
    <div className="p-1 sm:p-4 mt-8 ">
      <Header
        title={'Szczegóły Postaci'}
        description={
          'Poznaj wszechświat Gwiezdnych Wojen! Przeglądaj dane dotyczące postaci. Skorzystaj z zakładek, aby przełączać się między kategoriami i odkrywać fascynujące informacje.'
        }
      />
      <CharacterDetails
        details={details}
        isError={isError}
        isLoading={isLoading}
      />
    </div>
  );
};
