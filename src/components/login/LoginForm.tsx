import { Stack } from '@chakra-ui/react';
import { ReactElement } from 'react';
import {
  FieldValues,
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form';

import Button from '@/components/button/Button';
import InputText from '@/components/form/InputText';

interface LoginFormProps {
  onValid: SubmitHandler<FieldValues>;
  onError: SubmitErrorHandler<FieldValues>;
}

/**
 * @description Form for login
 * @constructor
 */
function LoginForm(props: LoginFormProps): ReactElement {
  const { onValid, onError } = props;
  const form = useForm();

  return (
    <FormProvider {...form}>
      <form>
        <Stack spacing={6}>
          <InputText
            label="Email"
            name="email"
            placeholder="nom.prenom@gmail.com"
            rules={{
              required: 'Entrez votre adresse e-mail',
            }}
          />
          <InputText
            label="Mot de passe"
            name="password"
            placeholder="********"
            type="password"
            rules={{
              required: 'Entrez votre mot de passe',
            }}
          />
          <Button
            marginLeft="auto"
            width="fit-content"
            colorScheme="purple"
            onClick={form.handleSubmit(onValid, onError)}
          >
            Se connecter
          </Button>
        </Stack>
      </form>
    </FormProvider>
  );
}

export default LoginForm;
