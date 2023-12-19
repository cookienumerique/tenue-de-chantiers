import {
  Alert,
  SkeletonText,
  Stack,
  Text,
} from '@chakra-ui/react';
import type { ReactElement } from 'react';

import BadgePatrimoine from '@/app-components/badge/BadgePatrimoine';
import PatrimoineEnum from '@/enums/PatrimoineEnum';

type ZacLabelProps = {
  nom: string | undefined;
  patrimoine: PatrimoineEnum | undefined;
  isLoading: boolean;
  isError: boolean;
};
/**
 * @description Affiche les informations d'une Zac
 */
export default function ZacLabel(
  props: ZacLabelProps
): ReactElement {
  const { nom, patrimoine, isLoading, isError } = props;

  return (
    <Stack>
      {isError ? (
        <Alert>Error</Alert>
      ) : (
        <Stack
          display="flex"
          flexDir="row"
          alignItems="center"
          gap="sm"
        >
          {isLoading ? (
            <>
              <SkeletonText
                noOfLines={1}
                width="6em"
              />
            </>
          ) : (
            <>
              <Text
                color="greyDark"
                fontWeight="bold"
              >
                {nom}
              </Text>
              <BadgePatrimoine patrimoine={patrimoine} />
            </>
          )}
        </Stack>
      )}
    </Stack>
  );
}
