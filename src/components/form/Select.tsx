import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Skeleton,
} from '@chakra-ui/react';
import { useField } from '@formiz/core';
import { Key, ReactElement, useEffect } from 'react';
import {
  default as ReactSelect,
  SingleValue,
} from 'react-select';

import LabelValue from '@/interfaces/LabelValue';

type SelectProps = {
  options: LabelValue[] | undefined;
  defaultValue?: string | number;
  label?: string;
  name: string;
  helperMessage?: string;
  placeholder?: string;
  isLoading?: boolean;
  isError?: boolean;
  onChange?: (newValue: LabelValue) => void;
};

export default function Select(
  props: SelectProps
): ReactElement {
  const {
    placeholder,
    onChange = () => null,
    defaultValue,
    label,
    options,
    helperMessage,
    isLoading = false,
    isError = false,
  } = props;

  const { value, setValue, errorMessage } =
    useField(props);

  const handleChange = (
    newValue: SingleValue<string | number>
  ) => {
    setValue(newValue);
    // @ts-expect-error todo
    onChange(newValue);
  };

  const optionDefault = options?.find(
    (option: LabelValue) => {
      // Check if option is instance of labelValue
      return (
        option?.value?.toString() ===
        defaultValue?.toString()
      );
    }
  );

  useEffect(() => {
    if (!optionDefault) return;
    // @ts-expect-error todo
    setValue(optionDefault);
  }, [setValue, optionDefault]);

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
    <FormControl isInvalid={!!errorMessage}>
      <FormLabel aria-required>{label}</FormLabel>
      <ReactSelect
        key={defaultValue as Key}
        onChange={handleChange}
        value={value}
        // @ts-expect-error todo
        options={options}
        placeholder={placeholder}
      />
      <FormHelperText>{helperMessage}</FormHelperText>
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
}
