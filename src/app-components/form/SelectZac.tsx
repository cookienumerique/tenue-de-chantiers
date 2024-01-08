import { ReactElement } from 'react';
import { ActionMeta } from 'react-select';

import Select from '@/components/form/Select';
import useFindAllZacSelectOptions from '@/hooks/zacs/useFindAllZacSelectOptions';
import LabelValue from '@/interfaces/LabelValue';

type SelectZacProps = {
  defaultValue?: string | number;
  name?: string;
  callbackOnChange?: (
    lalbeValue: LabelValue,
    meta: ActionMeta<string | number>
  ) => void;
};
/**
 * @description Select Zac
 * @param props
 * @constructor
 */
export default function SelectZac(
  props: SelectZacProps
): ReactElement {
  const {
    defaultValue,
    name = 'zacId',
    callbackOnChange,
  } = props;
  const {
    data: options,
    isLoading,
    isError,
  } = useFindAllZacSelectOptions();

  return (
    <Select
      label="ZAC"
      placeholder="Sélection de la ZAC"
      isLoading={isLoading}
      isError={isError}
      options={options}
      defaultValue={defaultValue}
      name={name}
      onChange={callbackOnChange}
      required
    />
  );
}
