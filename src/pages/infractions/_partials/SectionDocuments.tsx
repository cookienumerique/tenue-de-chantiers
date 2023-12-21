import { Text } from '@chakra-ui/react';
import { ReactElement } from 'react';

import Section from '@/components/section/Section';

/**
 * @description Section du formulaire "documents" pour la création d'une infraction
 */
export default function SectionDocuments(): ReactElement {
  return (
    <Section title="Documents">
      <Text as="i">Section à venir</Text>
    </Section>
  );
}
