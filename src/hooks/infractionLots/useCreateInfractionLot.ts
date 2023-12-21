import { useMutation } from '@tanstack/react-query';
import Axios from 'axios';

export type CreateInfractionLotPayload = {
  id_lot: number | string;
  id_infraction: number | string;
  urgence: string | number;
};
/**
 * @description Création d'une infraction lot
 */
const useCreateInfractionLot = () => {
  return useMutation(
    (payload: CreateInfractionLotPayload) => {
      return Axios.post(
        `${process.env.NEXT_PUBLIC_APP_API_HOST}/infractions-lots`,
        payload
      );
    },
    {
      onError: (error) => {
        console.log(error);
      },
      onSuccess: async (data) => {
        return console.log(data);
      },
    }
  );
};

export default useCreateInfractionLot;
