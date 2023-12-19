import { ReactElement } from 'react';

import Select from '@/components/form/Select';
import useFindLotsByZacId from '@/hooks/lots/useFindLotsByZacIdOptions';

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
    name = 'lotId',
    zacId,
    isLoading,
    isError,
  } = props;

  const {
    data: options,
    isLoading: isLoadingLot,
    isError: isErrorLot,
  } = useFindLotsByZacId({ id: zacId });

  return (
    <Select
      label="Lot"
      placeholder="Sélection du lot"
      isLoading={isLoading || isLoadingLot}
      isError={isError || isErrorLot}
      options={options}
      defaultValue={defaultValue}
      name={name}
    />
  );
}
