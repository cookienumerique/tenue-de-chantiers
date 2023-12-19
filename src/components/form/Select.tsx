import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Skeleton,
} from '@chakra-ui/react';
import { Key, ReactElement, useEffect } from 'react';
import {
  RegisterOptions,
  useFormContext,
} from 'react-hook-form';
import { default as ReactSelect } from 'react-select';

import LabelValue from '@/interfaces/LabelValue';

type SelectProps = {
  options: readonly LabelValue[] | undefined;
  defaultValue?: string | number | undefined;
  name: string;
  label?: string;
  helperMessage?: string;
  rules?: RegisterOptions;
  placeholder?: string;
  isLoading?: boolean;
  isError?: boolean;
};

export default function Select(
  props: SelectProps
): ReactElement {
  // const {value } = {}
  const {
    placeholder,
    defaultValue,
    label,
    options,
    name,
    helperMessage,
    rules = {},
    isLoading = false,
    isError = false,
  } = props;

  const {
    register,
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext();

  const {
    name: nameRegister,
    onBlur,
    ref,
  } = register(name, rules);

  const optionDefault = options?.find((option) => {
    // Check if option is instance of labelValue
    return (
      option?.value?.toString() ===
      defaultValue?.toString()
    );
  });

  useEffect(() => {
    if (!optionDefault) return;
    setValue(name, optionDefault);
  }, [defaultValue, setValue, name, optionDefault]);

  if (isLoading)
    return (
      <Skeleton
        width="100%"
        borderRadius="md"
        height="36px"
      />
    );

  if (isError) return <div>Error...</div>;

  return (
    <FormControl isInvalid={!!errors?.[nameRegister]}>
      <FormLabel aria-required>{label}</FormLabel>
      <ReactSelect
        onChange={(newValue) =>
          setValue(nameRegister, newValue)
        } // assign onChange event
        value={getValues(nameRegister)}
        key={getValues(nameRegister) as Key}
        onBlur={onBlur} // assign onBlur event
        name={nameRegister} // assign name prop
        ref={ref} // assign ref prop
        defaultValue={optionDefault}
        options={options}
        placeholder={placeholder}
      />
      <FormHelperText>{helperMessage}</FormHelperText>
      <FormErrorMessage>
        {errors?.[name]?.message?.toString()}
      </FormErrorMessage>
    </FormControl>
  );
}
