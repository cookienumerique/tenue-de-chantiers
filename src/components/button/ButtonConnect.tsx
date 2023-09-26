import { ReactElement } from 'react';

import ButtonConnectFacebook from '@/components/button/ButtonConnectFacebook';
import ButtonConnectGoogle from '@/components/button/ButtonConnectGoogle';

export type ButtonConnectProps = {
  domain?: 'google' | 'facebook';
};

export default function ButtonConnect(
  props: ButtonConnectProps
): ReactElement {
  const { domain = 'facebook' } = props;

  if (domain === 'facebook') {
    return <ButtonConnectFacebook />;
  }

  if (domain === 'google') {
    return <ButtonConnectGoogle />;
  }

  return <></>;
}
