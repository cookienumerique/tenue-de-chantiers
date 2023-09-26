import { ReactElement } from 'react';
import { FaFacebookF } from 'react-icons/fa';

import Button, {
  ButtonProps,
} from '@/components/button/Button';
export type ButtonCoonectFacebookProps = ButtonProps;

function ButtonConnectFacebook(
  props: ButtonCoonectFacebookProps
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
