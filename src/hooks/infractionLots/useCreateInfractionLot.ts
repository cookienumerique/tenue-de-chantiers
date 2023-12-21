import { useMutation } from '@tanstack/react-query';
import Axios from 'axios';

import useToastSuccess from '@/hooks/toast/useToastSuccess';
import MutationProps from '@/types/query/MutationProps';

export type CreateInfractionLotPayload = {
  id_lot: number | string;
  id_infraction: number | string;
  urgence: string | number;
};

/**
 * @description Création d'une infraction lot
 */
const useCreateInfractionLot = (
  props?: MutationProps
) => {
  const {
    callbackOnSuccess = () => null,
    callbackOnError = () => null,
  } = props ?? {};
  const toastSuccess = useToastSuccess();
  return useMutation(
    (payload: CreateInfractionLotPayload) => {
      return Axios.post(
        `${process.env.NEXT_PUBLIC_APP_API_HOST}/infractions-lots`,
        payload
      );
    },
    {
      onError: (error) => {
        callbackOnError(error);
      },
      onSuccess: async (data) => {
        toastSuccess({
          title: 'Création réussie',
          description:
            "L'infraction a été créée avec succès",
        });
        return callbackOnSuccess(data);
      },
    }
  );
};

export default useCreateInfractionLot;
