import { Stack } from '@chakra-ui/react';
import { ReactElement } from 'react';

type LayoutProps = {
  children: ReactElement;
};
export default function Layout({
  children,
}: LayoutProps) {
  return <Stack height="100%">{children}</Stack>;
}
