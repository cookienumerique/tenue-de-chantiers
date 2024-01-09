import { Stack } from '@chakra-ui/react';
import type { ReactElement } from 'react';

import TextPrimary from '@/components/text/TextPrimary';
import TextSecondary from '@/components/text/TextSecondary';
import capitalize from '@/functions/capitalize';

type LabelValueProps = {
  label: string;
  value?: string | undefined | number;
  children?: ReactElement;
};
/**
 * @description Afficher une valeur avec un label
 */
export default function LabelValue(
  props: LabelValueProps
): ReactElement {
  const { children, value, label, ...rest } = props;

  return (
    <Stack
      direction="row"
      spacing="md"
      {...rest}
    >
      <TextSecondary minWidth="8em">
        {capitalize(label)}
      </TextSecondary>
      {value ? (
        <TextPrimary>{capitalize(value)}</TextPrimary>
      ) : (
        children
      )}
    </Stack>
  );
}
