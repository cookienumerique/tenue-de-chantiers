import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input as InputChakra,
  InputProps,
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import {
  RegisterOptions,
  useFormContext,
} from 'react-hook-form';

interface InputTextProps extends InputProps {
  name: string;
  label?: string;
  helperMessage?: string;
  rules?: RegisterOptions;
}

// Integration useref with function componnent

function InputText(props: InputTextProps): ReactElement {
  const {
    placeholder,
    label,
    name,
    helperMessage,
    rules = {},
    type,
  } = props;

  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormControl isInvalid={!!errors?.[name]}>
      <FormLabel aria-required>{label}</FormLabel>
      <InputChakra
        placeholder={placeholder}
        type={type}
        {...register(name, {
          ...rules,
        })}
      />
      <FormHelperText>{helperMessage}</FormHelperText>
      <FormErrorMessage>
        {errors?.[name]?.message?.toString()}
      </FormErrorMessage>
    </FormControl>
  );
}

export default InputText;
