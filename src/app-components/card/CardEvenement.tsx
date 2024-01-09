import { Text } from '@chakra-ui/react';
import type { ReactElement } from 'react';
import { TbTimelineEventText } from 'react-icons/tb';

import Card from '@/app-components/card/Card';

type CardEvenementProps = {
  isLoading: boolean;
  isError: boolean;
};

/**
 * @description Affiche les informations d'evenements
 */
export default function CardEvenement(
  props: CardEvenementProps
): ReactElement {
  const { isLoading, isError } = props;

  return (
    <Card
      title="Evenements"
      isError={isError}
      isLoading={isLoading}
      color="evenement.600"
      icon={<TbTimelineEventText size={20} />}
    >
      <Text as="i">A venir</Text>
    </Card>
  );
}
