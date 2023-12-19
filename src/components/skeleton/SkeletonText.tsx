import {
  Skeleton,
  SkeletonTextProps,
} from '@chakra-ui/react';
import { ReactElement } from 'react';

export default function SkeletonText(
  props: SkeletonTextProps
): ReactElement {
  const { width } = props;
  return (
    <Skeleton
      height="1em"
      width={width}
    />
  );
}
