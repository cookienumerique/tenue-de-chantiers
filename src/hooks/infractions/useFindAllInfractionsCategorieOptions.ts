import CpgEnum from '@/enums/CpgEnum';
import uniqueOptions from '@/functions/uniqueOptions';
import useFindAllInfractionsByCpg from '@/hooks/infractions/useFindAllInfractionsByCpg';
import Infraction from '@/interfaces/Infraction';
import LabelValue from '@/interfaces/LabelValue';
import FindByIdReturn from '@/types/query/FindByReturn';

type FindAllInfractionsCategorieOptionsProps = {
  cpg: CpgEnum | undefined;
};
/**
 * @description Récupère toutes les infractions avec des catégories distinctes
 */
export default function useFindAllInfractionsCategorieOptions(
  props: FindAllInfractionsCategorieOptionsProps
): FindByIdReturn<LabelValue[]> {
  const { cpg } = props;
  const queryParams = new URLSearchParams({
    cpg: cpg ?? '',
  });

  const { data, isLoading, isError, invalidate } =
    useFindAllInfractionsByCpg({
      queryParams,
      key: ['infraction', cpg ?? ''],
    });

  const optionsByCpg = data?.map(
    (infraction: Infraction) => {
      return {
        label: infraction.categorie,
        value: infraction.id,
      };
    }
  );

  // Create a new array with unique values
  const options = uniqueOptions(optionsByCpg);

  return {
    data: options,
    isLoading,
    isError,
    invalidate,
  };
}
