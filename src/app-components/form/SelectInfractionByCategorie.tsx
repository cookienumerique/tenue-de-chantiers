import { ReactElement } from 'react';

import Select from '@/components/form/Select';
import useFindAllInfractionsByCategorieOptions from '@/hooks/infraction/useFindAllInfractionsByCategorieOptions';

type SelectInfractionByCategorieProps = {
  categorie: string | undefined;
  onChange?: () => void;
};

/**
 * @description Select infractions by categorie
 */
export default function SelectInfractionByCategorie(
  props: SelectInfractionByCategorieProps
): ReactElement {
  const { categorie, onChange } = props;
  const {
    data: options,
    isLoading: isLoadingInfraction,
    isError: isErrorInfraction,
  } = useFindAllInfractionsByCategorieOptions({
    categorie,
  });

  return (
    <Select
      label="Sous-catégorie"
      name="infraction.sousCategorie"
      placeholder="Sélectionnez une sous-catégorie"
      isLoading={isLoadingInfraction}
      isError={isErrorInfraction}
      options={options}
      onChange={onChange}
    />
  );
}
