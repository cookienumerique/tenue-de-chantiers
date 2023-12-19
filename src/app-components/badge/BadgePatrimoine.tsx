import { Badge, Stack } from '@chakra-ui/react';
import { ReactElement } from 'react';

import PatrimoineEnum from '@/enums/PatrimoineEnum';

type BadgePatrimoineProps = {
  patrimoine: PatrimoineEnum | undefined;
};
/**
 * @description Badge qui affichage le patrimoine d'une ZAC
 */
export default function BadgePatrimoine(
  props: BadgePatrimoineProps
): ReactElement {
  const { patrimoine } = props;

  let colorScheme = 'gray';

  if (patrimoine === PatrimoineEnum.EPA_FRANCE) {
    colorScheme = 'yellow';
  } else if (patrimoine === PatrimoineEnum.EPA_MARNE) {
    colorScheme = 'red';
  }

  return (
    <Stack>
      <Badge colorScheme={colorScheme}>
        {patrimoine ?? 'Patrimoine inconnu'}
      </Badge>
    </Stack>
  );
}
