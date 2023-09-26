import { ReactElement } from 'react';
import { AiOutlineGooglePlus } from 'react-icons/ai';

import Button, {
  ButtonProps,
} from '@/components/button/Button';
export type ButtonConnectGoogleProps = ButtonProps;

/**
 * @description Bouton de connexion avec Google
 * @param props
 * @constructor
 */
function ButtonConnectGoogle(
  props: ButtonConnectGoogleProps
): ReactElement {
  return (
    <Button
      colorScheme="red"
      leftIcon={<AiOutlineGooglePlus />}
      {...props}
    >
      Se connecter avec Google
    </Button>
  );
}

export default ButtonConnectGoogle;
