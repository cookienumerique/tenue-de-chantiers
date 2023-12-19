type FindByIdReturn<T> = {
  data: T | undefined;
  isLoading: boolean;
  isError: boolean;
  invalidate: () => void;
};

export default FindByIdReturn;
