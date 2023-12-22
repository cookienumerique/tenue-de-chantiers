type MutationProps<T> = {
  callbackOnSuccess?: (success: T) => void;
  callbackOnError?: (error: unknown) => void;
};

export default MutationProps;
