import type { ReactElement } from 'react';
import { RiSquareFill } from 'react-icons/ri';

import BadgeCpg from '@/app-components/badge/BadgeCpg';
import Card from '@/app-components/card/Card';
import LabelValue from '@/components/text/LabelValue';
import Lot from '@/interfaces/Lot';

type CardLotProps = {
  isLoading: boolean;
  isError: boolean;
  lot: Lot | undefined;
};
/**
 * @description Affiche les informations d'une lot
 */
export default function CardLot(
  props: CardLotProps
): ReactElement {
  const { isLoading = true, lot, isError } = props;

  return (
    <Card
      isLoading={isLoading}
      isError={isError}
      title="Lot"
      color="lot.600"
      icon={<RiSquareFill size={20} />}
    >
      <LabelValue
        label="Libellé"
        value={lot?.libLot}
      />
      <LabelValue
        label="Code"
        value={lot?.codLot}
      />
      <LabelValue label="cpg">
        <BadgeCpg cpg={lot?.cpg?.value} />
      </LabelValue>
      <LabelValue
        label="Confidentiel"
        value={lot?.progConfidentiel}
      />
      <LabelValue
        label="Livré"
        value={lot?.livre ? 'Oui' : 'Non'}
      />
    </Card>
  );
}
