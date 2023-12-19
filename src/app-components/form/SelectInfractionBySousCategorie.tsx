import { ReactElement } from 'react';

import Select from '@/components/form/Select';
import useFindAllInfractionsBySousCategorieOptions from '@/hooks/infraction/useFindAllInfractionsBySousCategorieOptions';

type SelectInfractionBySousCategorieProps = {
  sousCategorie: string | undefined;
};

/**
 * @description Select infractions by sous-categorie
 */
export default function SelectInfractionBySousCategorie(
  props: SelectInfractionBySousCategorieProps
): ReactElement {
  const { sousCategorie } = props;

  const {
    data: optionsInfractionLibelle,
    isLoading: isLoadingInfraction,
    isError: isErrorInfraction,
  } = useFindAllInfractionsBySousCategorieOptions({
    sousCategorie: sousCategorie,
  });

  return (
    <Select
      label="Libellé de l'infraction"
      name="infraction.libelle"
      placeholder="Sélectionnez une infraction"
      isLoading={isLoadingInfraction}
      isError={isErrorInfraction}
      options={optionsInfractionLibelle}
    />
  );
}
