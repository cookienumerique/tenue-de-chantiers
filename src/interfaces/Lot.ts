import CpgEnum from '@/enums/CpgEnum';
import Zac from '@/interfaces/Zac';

export default interface Lot {
  id: string;
  zac: Zac;
  cod: string;
  libLot: string;
  codeInsee: string;
  codeDept: string;
  libComm: string;
  codeSect: string;
  geom: string;
  description: string;
  dateLivraison: string;
  dateDebutTravaux: string;
  progConfidentiel: string;
  preneur: string;
  codLot: string;
  montantChargeFonciere: number;
  cpg: { name: string; value: CpgEnum };
  adresse: string;
}
