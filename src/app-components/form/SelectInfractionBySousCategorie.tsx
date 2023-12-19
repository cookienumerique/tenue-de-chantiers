import { ReactElement } from 'react';

import Select from '@/components/form/Select';
import useFindAllInfractionsBySousCategorieOptions from '@/hooks/infraction/useFindAllInfractionsBySousCategorieOptions';
import { LabelValueCategorie } from '@/interfaces/LabelValueCategorie';

type SelectInfractionBySousCategorieProps = {
  sousCategorie: LabelValueCategorie;
};

/**
 * @description Select infractions by sous-categorie
 */
export default function SelectInfractionBySousCategorie(
  props: SelectInfractionBySousCategorieProps
): ReactElement {
  const { sousCategorie } = props;
  const {
    data: optionsBySousCategorie,
    isLoading: isLoadingInfraction,
    isError: isErrorInfraction,
  } = useFindAllInfractionsBySousCategorieOptions({
    sousCategorie,
  });

  return (
    <Select
      label="Libellé de l'infraction"
      name="infractionId"
      placeholder="Sélectionnez une infraction"
      isLoading={isLoadingInfraction}
      isError={isErrorInfraction}
      options={optionsBySousCategorie}
    />
  );
}
