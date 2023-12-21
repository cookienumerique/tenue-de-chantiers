import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import Select from '@/components/form/Select';
import useFindLotsByZacId from '@/hooks/lots/useFindLotsByZacIdOptions';
import LabelValue from '@/interfaces/LabelValue';

type SelectLotProps = {
  defaultValue?: string | number;
  zacId: number | undefined;
  name?: string;
  isLoading: boolean;
  isError: boolean;
};
/**
 * @description Select Lot by ZacId
 */
export default function SelectLotByZacId(
  props: SelectLotProps
): ReactElement {
  const {
    defaultValue,
    name = 'optionLot',
    zacId,
    isLoading,
    isError,
  } = props;
  const router = useRouter();

  const {
    data: options,
    isLoading: isLoadingLot,
    isError: isErrorLot,
  } = useFindLotsByZacId({ id: zacId });

  const handleChange = async (option: LabelValue) => {
    // change the lotId in queryParams
    await router.push({
      pathname: router.pathname,
      query: { ...router.query, lotId: option?.value },
    });
  };

  return (
    <Select
      label="Lot"
      placeholder="Sélection du lot"
      isLoading={isLoading || isLoadingLot}
      isError={isError || isErrorLot}
      options={options}
      defaultValue={defaultValue}
      name={name}
      onChange={handleChange}
      required
    />
  );
}
