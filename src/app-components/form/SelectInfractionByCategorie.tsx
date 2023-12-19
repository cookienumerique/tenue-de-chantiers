import { ReactElement } from 'react';

import Select from '@/components/form/Select';
import useFindAllInfractionsByCategorieOptions from '@/hooks/infraction/useFindAllInfractionsByCategorieOptions';
import { LabelValueCategorie } from '@/interfaces/LabelValueCategorie';

type SelectInfractionByCategorieProps = {
  categorie: LabelValueCategorie;
};

/**
 * @description Select infractions by categorie
 */
export default function SelectInfractionByCategorie(
  props: SelectInfractionByCategorieProps
): ReactElement {
  const { categorie } = props;
  const {
    data: options,
    isLoading: isLoadingInfraction,
    isError: isErrorInfraction,
  } = useFindAllInfractionsByCategorieOptions({
    categorie,
  });

  const optionsSousCategorie = options?.filter(
    (option) => option?.categorie === categorie?.label
  );

  return (
    <Select
      label="Sous-catégorie"
      name="sousCategorie"
      placeholder="Sélectionnez une sous-catégorie"
      isLoading={isLoadingInfraction}
      isError={isErrorInfraction}
      options={optionsSousCategorie}
    />
  );
}
