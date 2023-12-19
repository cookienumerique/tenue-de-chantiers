type FindListReturn<T> = {
  data: T | undefined;
  isLoading: boolean;
  isError: boolean;
  invalidate: () => void;
};

export default FindListReturn;
