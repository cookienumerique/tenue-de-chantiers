import CpgEnum from '@/enums/CpgEnum';
import useFindAllInfractionsByCpg from '@/hooks/infraction/useFindAllInfractionsByCpg';
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

  const options = data?.map((infraction: Infraction) => {
    return {
      label: infraction.categorie,
      value: infraction.id,
    };
  });

  // Create a new array with unique values
  const uniqueOptions = options?.filter(
    (option, index, self) =>
      index ===
      self.findIndex((t) => t.label === option.label)
  );

  return {
    data: uniqueOptions,
    isLoading,
    isError,
    invalidate,
  };
}
