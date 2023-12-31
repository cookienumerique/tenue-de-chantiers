import {
  Alert,
  Card as CardChakra,
  CardBody,
  CardHeader,
  CardProps as CardChakraProps,
  SkeletonText,
  Stack,
  StackProps,
  Text,
} from '@chakra-ui/react';
import type { ReactElement } from 'react';

type CardProps = {
  isLoading: boolean;
  isError: boolean;
  children: ReactElement | ReactElement[];
  title: string;
  propsHeader?: StackProps;
  cardProps?: CardChakraProps;
  icon?: ReactElement;
  color?: string;
} & CardChakraProps;

/**
 * @description Template de carte
 */
export default function Card(
  props: CardProps
): ReactElement {
  const {
    isLoading = false,
    children,
    isError = false,
    propsHeader = {},
    title,
    cardProps,
    icon,
    color = 'gray.700',
  } = props;

  if (isError) {
    return (
      <Alert>
        Une erreur est survenue lors de la récupération
        des données
      </Alert>
    );
  }

  return (
    <CardChakra
      variant="elevated"
      borderRadius="xl"
      border="2px solid"
      borderColor={color}
      backgroundColor={color}
      height="100%"
      {...cardProps}
    >
      {title ? (
        <CardHeader
          borderTopRadius="inherit"
          fontWeight="bold"
          color="white"
          {...propsHeader}
        >
          <Stack
            flexDir="row"
            alignItems="center"
            spacing="sm"
          >
            {icon}
            <Text>{title}</Text>
          </Stack>
        </CardHeader>
      ) : (
        <></>
      )}

      <CardBody
        borderBottomRadius="inherit"
        backgroundColor="gray.50"
      >
        <Stack spacing="2xs">
          {isLoading ? (
            <SkeletonText
              noOfLines={4}
              spacing="xs"
              skeletonHeight="3"
            />
          ) : (
            children
          )}
        </Stack>
      </CardBody>
    </CardChakra>
  );
}
