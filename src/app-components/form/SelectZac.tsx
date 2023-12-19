import { ReactElement } from 'react';

import Select from '@/components/form/Select';
import useFindAllOptionsZac from '@/hooks/zacs/useFindAllOptionsZac';

type SelectZacProps = {
  defaultValue?: string | number;
  name?: string;
};
/**
 * @description Select Zac
 * @param props
 * @constructor
 */
export default function SelectZac(
  props: SelectZacProps
): ReactElement {
  const { defaultValue, name = 'zacId' } = props;
  const {
    data: options,
    isLoading,
    isError,
  } = useFindAllOptionsZac();

  return (
    <Select
      placeholder="Sélection de la ZAC"
      isLoading={isLoading}
      isError={isError}
      options={options}
      defaultValue={defaultValue}
      name={name}
    />
  );
}
