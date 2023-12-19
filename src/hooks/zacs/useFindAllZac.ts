import {
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import axios from 'axios';

import Zac from '@/interfaces/Zac';
import FindListProps from '@/types/query/FindListProps';
import FindListReturn from '@/types/query/FindListReturn';

/**
 * @description Query for retrieving all Zac
 */
const useFindAllZac = ({
  enabled = true,
}: FindListProps = {}): FindListReturn<Zac[]> => {
  const queryKey = ['zacs'];
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery(
    queryKey,
    () =>
      axios.get(
        `${process.env.NEXT_PUBLIC_APP_API_HOST}/zacs`
      ),
    { enabled }
  );

  const invalidate = () =>
    queryClient.invalidateQueries(queryKey);

  const { zacs } =
    (data as unknown as {
      zacs: Zac[] | undefined;
    }) ?? {};

  return {
    data: zacs,
    isLoading,
    isError,
    invalidate,
  };
};

export default useFindAllZac;
