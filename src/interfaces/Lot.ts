import CpgEnum from '@/enums/CpgEnum';
import Zac from '@/interfaces/Zac';

export default interface Lot {
  id: string;
  zac: Zac;
  cod: string;
  lib: string;
  dateLivraison: string;
  dateDebutTravaux: string;
  adresse: string;
  geom: string;
  montantChargeFonciere: number;
  cpg: CpgEnum;
}
