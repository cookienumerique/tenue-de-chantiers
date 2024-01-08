import {
  Alert,
  Card as CardChakra,
  CardBody,
  CardHeader,
  CardProps as CardChakraProps,
  Skeleton,
  StackProps,
  Text,
} from '@chakra-ui/react';
import type { ReactElement } from 'react';

type CardProps = {
  isLoading: boolean;
  isError: boolean;
  children: ReactElement;
  title: string;
  propsHeader?: StackProps;
  cardProps?: CardChakraProps;
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
  } = props;

  if (isLoading) {
    return (
      <Skeleton
        width="100%"
        height="100%"
      />
    );
  }
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
      {...cardProps}
    >
      {title ? (
        <CardHeader
          borderTopRadius="inherit"
          fontWeight="bold"
          {...propsHeader}
        >
          <Text>{title}</Text>
        </CardHeader>
      ) : (
        <></>
      )}

      <CardBody
        borderBottomRadius="inherit"
        backgroundColor="gray.50"
      >
        {children}
      </CardBody>
    </CardChakra>
  );
}
