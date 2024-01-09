import type { ReactElement } from 'react';
import { PiSquaresFourFill } from 'react-icons/pi';

import Card from '@/app-components/card/Card';
import LabelValue from '@/components/text/LabelValue';
import Zac from '@/interfaces/Zac';

type CardZacProps = {
  zac: Zac | undefined;
  isLoading: boolean;
  isError: boolean;
};
/**
 * @description Affiche les informations d'une Zac
 */
export default function CardZac(
  props: CardZacProps
): ReactElement {
  const { zac, isLoading, isError } = props;
  return (
    <Card
      isLoading={isLoading}
      isError={isError}
      title="ZAC"
      color="zac.500"
      icon={<PiSquaresFourFill size={20} />}
    >
      <LabelValue
        label="Libellé"
        value={zac?.libZac}
      />

      <LabelValue
        label="Libellé AMGR"
        value={zac?.libAmgr}
      />
      <LabelValue
        label="code sect"
        value={zac?.codSect}
      />
      <LabelValue
        label="Code stat"
        value={zac?.codStat}
      />
      <LabelValue
        label="patrimoine"
        value="A venir"
      />
    </Card>
  );
}
