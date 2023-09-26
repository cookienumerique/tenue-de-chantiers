import { ReactElement } from 'react';

import ButtonConnectFacebook from '@/components/button/ButtonConnectFacebook';
import ButtonConnectGoogle from '@/components/button/ButtonConnectGoogle';

export type ButtonConnectProps = {
  domain:
    | 'google'
    | 'facebook'
    | 'classic'
    | 'login'
    | 'signIn';
};

export default function ButtonConnect(
  props: ButtonConnectProps
): ReactElement {
  const { domain = 'classic' } = props;

  if (domain === 'facebook') {
    return <ButtonConnectFacebook />;
  }

  if (domain === 'google') {
    return <ButtonConnectGoogle />;
  }

  return <></>;
}
