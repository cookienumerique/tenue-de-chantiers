import { ReactElement } from 'react';
import { FaFacebookF } from 'react-icons/fa';

import Button, {
  ButtonProps,
} from '@/components/button/Button';
export type ButtonConnectFacebookProps = ButtonProps;

function ButtonConnectFacebook(
  props: ButtonConnectFacebookProps
): ReactElement {
  return (
    <Button
      colorScheme="facebook"
      leftIcon={<FaFacebookF />}
      {...props}
    >
      Se connecter avec Facebook
    </Button>
  );
}

export default ButtonConnectFacebook;
