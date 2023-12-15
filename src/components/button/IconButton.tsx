import {
  IconButton as IconButtonChakra,
  IconButtonProps as IconButtonPropsChakra,
  PlacementWithLogical,
  Stack,
  Tooltip,
} from '@chakra-ui/react';
import { ReactElement } from 'react';

type IconButtonProps = {
  label: string;
  placement?: PlacementWithLogical;
} & IconButtonPropsChakra;
export default function IconButton(
  props: IconButtonProps
): ReactElement {
  const {
    label,
    backgroundColor,
    color,
    placement = 'left',
    ...rest
  } = props;
  return (
    <Stack>
      <Tooltip
        placement={placement}
        color={color}
        label={label}
        backgroundColor={backgroundColor}
      >
        <IconButtonChakra
          color={color}
          backgroundColor={backgroundColor}
          _active={{ backgroundColor: 'none' }}
          {...rest}
        />
      </Tooltip>
    </Stack>
  );
}
