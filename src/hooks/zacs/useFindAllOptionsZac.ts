import useFindAllZac from '@/hooks/zacs/useFindAllZac';
import LabelValue from '@/interfaces/LabelValue';
import Zac from '@/interfaces/Zac';
import FindListReturn from '@/types/query/FindListReturn';

/**
 * @description Retrieve all Zac and transform them into LabelValue[]
 */
export default function useFindAllOptionsZac(): FindListReturn<
  LabelValue[]
> {
  const { data, isLoading, isError, invalidate } =
    useFindAllZac();

  const options = data?.map(
    (zac: Zac): LabelValue => ({
      label: zac.nom,
      value: zac.id,
    })
  );

  return {
    data: options,
    isLoading,
    isError,
    invalidate,
  };
}
