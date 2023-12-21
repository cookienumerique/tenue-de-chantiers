import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Skeleton,
} from '@chakra-ui/react';
import { FieldValidation, useField } from '@formiz/core';
import { Key, ReactElement, useEffect } from 'react';
import { default as ReactSelect } from 'react-select';

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
  required?: boolean;
  optionMessage?: string;
  validations?: FieldValidation[];
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
    required = false,
    optionMessage = 'Aucune option disponible',
    validations,
  } = props;

  const {
    value,
    setValue,
    errorMessage,
    isValid,
    isSubmitted,
  } = useField(props);

  const handleChange = (newValue: LabelValue) => {
    // @ts-expect-error todo
    setValue(newValue);
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
    <FormControl
      isInvalid={!isValid}
      isRequired={required}
    >
      <FormLabel aria-required={required}>
        {label}
      </FormLabel>
      <ReactSelect
        key={defaultValue as Key}
        // @ts-expect-error todo
        onChange={handleChange}
        value={value}
        // @ts-expect-error todo
        options={options}
        placeholder={placeholder}
        required={required}
        aria-invalid={!isValid}
        noOptionsMessage={() => optionMessage}
        validations={validations}
      />
      {helperMessage ? (
        <FormHelperText>{helperMessage}</FormHelperText>
      ) : null}
      {!isValid ? (
        <FormErrorMessage>
          {required && !value && isSubmitted
            ? 'Ce champ est obligatoire'
            : ''}
          {errorMessage}
        </FormErrorMessage>
      ) : null}
    </FormControl>
  );
}
