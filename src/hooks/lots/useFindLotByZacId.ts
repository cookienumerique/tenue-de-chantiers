import {
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import axios from 'axios';

import Lot from '@/interfaces/Lot';
import FindByIdProps from '@/types/query/FindByIdProps';
import FindByIdReturn from '@/types/query/FindByReturn';

/**
 * @description Retrieve lots by zac id
 */
const useFindLotByZacId = ({
  id,
  enabled = true,
}: FindByIdProps): FindByIdReturn<Lot[]> => {
  const queryKey = ['lots'];
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery(
    queryKey,
    () =>
      axios.get(
        `${process.env.NEXT_PUBLIC_APP_API_HOST}/zacs/${id}/lots`
      ),
    { enabled }
  );

  const invalidate = () =>
    queryClient.invalidateQueries(queryKey);

  const { lots } =
    (data as unknown as {
      lots: Lot[] | undefined;
    }) ?? {};

  return {
    data: lots,
    isLoading,
    isError,
    invalidate,
  };
};

export default useFindLotByZacId;
