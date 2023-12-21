import { AxiosResponse } from 'axios';

type MutationProps = {
  callbackOnSuccess?: (success: AxiosResponse) => void;
  callbackOnError?: (error: unknown) => void;
};

export default MutationProps;
