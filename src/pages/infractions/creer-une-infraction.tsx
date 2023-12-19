import { Button, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import type { ReactElement } from 'react';
import {
  FieldValues,
  FormProvider,
  useForm,
} from 'react-hook-form';

import Layout from '@/components/layout/Layout';
import SectionInfraction from '@/pages/infractions/_partials/SectionInfraction';
import SectionLocalisation from '@/pages/infractions/_partials/SectionLocalisation';

import { NextPageWithLayout } from '../_app';

const CreationInfractionPage: NextPageWithLayout =
  (): ReactElement => {
    const { lotId } = useRouter()?.query;
    const form = useForm();

    const onSubmit = (values: FieldValues) => {
      console.log(values);
      alert(values);
    };

    const onError = (error: FieldValues) =>
      console.error('err', error);

    return (
      <Stack gap="sm">
        <Text>Creation d&apos;une infraction</Text>

        <FormProvider {...form}>
          {/* Section localisation */}
          <SectionLocalisation lotId={lotId} />

          {/* Section infraction */}
          <SectionInfraction />

          {/* Soumission du formulaire */}
          <Button
            colorScheme="primary"
            type="submit"
            onClick={form.handleSubmit(
              (values) => onSubmit(values),
              onError
            )}
          >
            Créer l&apos;infraction
          </Button>
        </FormProvider>
      </Stack>
    );
  };

CreationInfractionPage.getLayout = function getLayout(
  page: ReactElement
) {
  return <Layout>{page}</Layout>;
};

export default CreationInfractionPage;
