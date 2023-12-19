import useFindAllInfractions from '@/hooks/infraction/useFindAllInfractions';
import Infraction from '@/interfaces/Infraction';
import LabelValue from '@/interfaces/LabelValue';
import FindByIdReturn from '@/types/query/FindByReturn';

type LabelValueCategorie = LabelValue & {
  categorie: string;
  sousCategorie: string;
};

/**
 * @description Récupère toutes les infractions avec des catégories distinctes
 */
export default function useFindAllInfractionsCategorieOptions(): FindByIdReturn<
  LabelValueCategorie[]
> {
  const { data, isLoading, isError, invalidate } =
    useFindAllInfractions();

  const options = data?.map(
    (infraction: Infraction): LabelValueCategorie => {
      return {
        label: infraction.categorie,
        categorie: infraction.categorie,
        sousCategorie: infraction.sousCategorie,
        value: infraction.id,
      };
    }
  );

  // Create a new array with unique values
  const uniqueOptions = options?.filter(
    (option, index, self) =>
      index ===
      self.findIndex(
        (t) => t.categorie === option.categorie
      )
  );

  return {
    data: uniqueOptions,
    isLoading,
    isError,
    invalidate,
  };
}
