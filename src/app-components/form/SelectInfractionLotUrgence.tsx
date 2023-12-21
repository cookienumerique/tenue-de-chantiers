import { ReactElement } from 'react';

import Select from '@/components/form/Select';
import useFindEnumsByEnumName from '@/hooks/enums/useFindEnumsByEnum';

type SelectInfractionLotUrgenceProps = {
  defaultValue?: string | number;
  name?: string;
};
/**
 * @description Select les dégrés d'urgence infraction_lot
 */
export default function SelectInfractionLotUrgence(
  props: SelectInfractionLotUrgenceProps
): ReactElement {
  const { defaultValue, name = 'urgenceOption' } = props;

  const {
    data: enums,
    isLoading,
    isError,
  } = useFindEnumsByEnumName({
    enumName: 'InfractionLotUrgenceEnum',
  });

  const options = enums?.map((enumItem) => ({
    value: enumItem,
    label: enumItem,
  }));

  return (
    <Select
      label="Degré d'urgence"
      placeholder="Sélection de l'urgence"
      isLoading={isLoading}
      isError={isError}
      options={options}
      defaultValue={defaultValue}
      name={name}
      required
    />
  );
}
