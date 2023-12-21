import uniqueOptions from '@/functions/uniqueOptions';
import useFindAllInfractionsByCpg from '@/hooks/infractions/useFindAllInfractionsByCpg';
import LabelValue from '@/interfaces/LabelValue';
import FindByIdReturn from '@/types/query/FindByReturn';

type FindAllInfractionsSousCategorieOptionsProps = {
  categorie: string | undefined;
};

/**
 * @description Récupère toutes les infractions d'une catégorie, avec des sous-catégories distinctes
 */
export default function useFindAllInfractionsByCategorieOptions(
  props: FindAllInfractionsSousCategorieOptionsProps
): FindByIdReturn<LabelValue[]> {
  const { categorie } = props;
  const { data, isLoading, isError, invalidate } =
    useFindAllInfractionsByCpg();

  // Create new array with categorie = props.categorie
  const optionsByCategorie = data
    ?.filter((option) => option.categorie === categorie)
    .map((option) => {
      return {
        value: option.id,
        label: option.sousCategorie,
      };
    });

  // Create a neoptionsByCategoriew array with unique values
  const options = uniqueOptions(optionsByCategorie);

  return {
    data: options,
    isLoading,
    isError,
    invalidate,
  };
}
