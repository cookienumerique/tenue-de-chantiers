import { ReactElement } from 'react';

import Select from '@/components/form/Select';
import useFindAllInfractionsCategorieOptions from '@/hooks/infraction/useFindAllInfractionsCategorieOptions';

/**
 * @description Un select pour les catégories d'infractions
 */
export default function SelectInfractionCategorie(): ReactElement {
  const {
    data: options,
    isLoading: isLoadingInfraction,
    isError: isErrorInfraction,
  } = useFindAllInfractionsCategorieOptions();

  return (
    <Select
      label="Catégorie"
      name="categorie"
      placeholder="Sélectionnez une catégorie"
      isLoading={isLoadingInfraction}
      isError={isErrorInfraction}
      options={options}
    />
  );
}
