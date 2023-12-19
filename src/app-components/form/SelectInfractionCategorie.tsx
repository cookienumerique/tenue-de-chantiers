import { ReactElement } from 'react';

import Select from '@/components/form/Select';
import CpgEnum from '@/enums/CpgEnum';
import useFindAllInfractionsCategorieOptions from '@/hooks/infraction/useFindAllInfractionsCategorieOptions';

type SelectInfractionCategorieProps = {
  onChange?: () => void;
  cpg: CpgEnum | undefined;
};
/**
 * @description Un select pour les catégories d'infractions
 */
export default function SelectInfractionCategorie(
  props: SelectInfractionCategorieProps
): ReactElement {
  const { onChange, cpg } = props;

  const {
    data: options,
    isLoading: isLoadingInfraction,
    isError: isErrorInfraction,
  } = useFindAllInfractionsCategorieOptions({
    cpg,
  });

  return (
    <Select
      label="Catégorie"
      name="infraction.categorie"
      placeholder="Sélectionnez une catégorie"
      isLoading={isLoadingInfraction}
      isError={isErrorInfraction}
      options={options}
      onChange={onChange}
    />
  );
}
