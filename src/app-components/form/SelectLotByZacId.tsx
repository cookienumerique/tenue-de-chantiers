import { ReactElement } from 'react';

import Select from '@/components/form/Select';
import useFindLotsByZacId from '@/hooks/lots/useFindLotsByZacIdOptions';

type SelectLotProps = {
  defaultValue?: string | number;
  zacId: string | undefined;
  name?: string;
  isDisabled: boolean;
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
    isDisabled = false,
  } = props;

  const {
    data: options,
    isError: isErrorLot,
    isLoading,
  } = useFindLotsByZacId({ id: zacId });

  return (
    <Select
      label="Lot"
      placeholder="Sélection du lot"
      isError={isErrorLot}
      isLoading={isLoading}
      options={options}
      defaultValue={defaultValue}
      name={name}
      required
      isDisabled={isDisabled}
    />
  );
}
