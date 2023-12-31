import uniqueOptions from '@/functions/uniqueOptions';
import useFindAllInfractionsByCpg from '@/hooks/infractions/useFindAllInfractionsByCpg';
import LabelValue from '@/interfaces/LabelValue';
import FindByIdReturn from '@/types/query/FindByReturn';

type FindAllInfractionsBySousCategorieOptionsProps = {
  sousCategorie: string | undefined;
};

/**
 * @description Récupère toutes les infractions d'une catégorie, avec des sous-catégories distinctes
 */
export default function useFindAllInfractionsBySousCategorieOptions(
  props: FindAllInfractionsBySousCategorieOptionsProps
): FindByIdReturn<LabelValue[]> {
  const { sousCategorie } = props;
  const { data, isLoading, isError, invalidate } =
    useFindAllInfractionsByCpg();

  // Create new array with categorie = props.categorie
  const optionsBySousCategorie = data
    ?.filter(
      (option) => option.sousCategorie === sousCategorie
    )
    .map((option) => {
      return {
        value: option.id,
        label: option.libelle,
      };
    });

  // Create a new array with unique values
  const options = uniqueOptions(optionsBySousCategorie);

  return {
    data: options,
    isLoading,
    isError,
    invalidate,
  };
}
