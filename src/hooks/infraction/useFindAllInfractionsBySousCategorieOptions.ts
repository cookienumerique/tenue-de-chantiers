import useFindAllInfractions from '@/hooks/infraction/useFindAllInfractions';
import LabelValue from '@/interfaces/LabelValue';
import { LabelValueCategorie } from '@/interfaces/LabelValueCategorie';
import FindByIdReturn from '@/types/query/FindByReturn';

type FindAllInfractionsBySousCategorieOptionsProps = {
  sousCategorie: LabelValueCategorie;
};

/**
 * @description Récupère toutes les infractions d'une catégorie, avec des sous-catégories distinctes
 */
export default function useFindAllInfractionsBySousCategorieOptions(
  props: FindAllInfractionsBySousCategorieOptionsProps
): FindByIdReturn<LabelValue[]> {
  const { sousCategorie } = props;
  const { data, isLoading, isError, invalidate } =
    useFindAllInfractions();

  // Create new array with categorie = props.categorie
  const optionsByCategorie = data
    ?.filter(
      (option) =>
        option.sousCategorie ===
        sousCategorie?.sousCategorie
    )
    .map((option) => {
      return {
        value: option.id,
        label: option.libelle,
      };
    });

  // Create a new array with unique values
  const uniqueOptions = optionsByCategorie?.filter(
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
