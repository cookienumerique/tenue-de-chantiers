import InfractionLotStatutEnum from '@/enums/InfractionLotStatutEnum';
import InfractionLotUrgenceEnum from '@/enums/InfractionLotUrgenceEnum';
import Infraction from '@/interfaces/Infraction';
import Lot from '@/interfaces/Lot';
import Utilisateur from '@/interfaces/Utilisateur';

export default interface InfractionLot {
  id: string;
  date: string;
  statut: InfractionLotStatutEnum;
  urgence: InfractionLotUrgenceEnum;
  utilisateur: Utilisateur;
  infraction: Infraction;
  lot: Lot;
}
