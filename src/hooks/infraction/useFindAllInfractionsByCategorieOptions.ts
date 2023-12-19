import useFindAllInfractions from '@/hooks/infraction/useFindAllInfractions';
import { LabelValueCategorie } from '@/interfaces/LabelValueCategorie';
import FindByIdReturn from '@/types/query/FindByReturn';

type FindAllInfractionsSousCategorieOptionsProps = {
  categorie: LabelValueCategorie;
};

/**
 * @description Récupère toutes les infractions d'une catégorie, avec des sous-catégories distinctes
 */
export default function useFindAllInfractionsByCategorieOptions(
  props: FindAllInfractionsSousCategorieOptionsProps
): FindByIdReturn<LabelValueCategorie[]> {
  const { categorie } = props;
  const { data, isLoading, isError, invalidate } =
    useFindAllInfractions();

  // Create new array with categorie = props.categorie
  const optionsByCategorie = data
    ?.filter(
      (option) =>
        option.categorie === categorie?.categorie
    )
    .map((option) => {
      return {
        value: option.id,
        label: option.sousCategorie,
        categorie: option.categorie,
        sousCategorie: option.sousCategorie,
      };
    });

  // Create a new array with unique values
  const uniqueOptions = optionsByCategorie?.filter(
    (option, index, self) =>
      index ===
      self.findIndex(
        (t) => t.sousCategorie === option.sousCategorie
      )
  );
  return {
    data: uniqueOptions,
    isLoading,
    isError,
    invalidate,
  };
}
