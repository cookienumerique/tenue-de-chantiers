import PatrimoineEnum from '@/enums/PatrimoineEnum';

export default interface Zac {
  id: number;
  libZac: string;
  codStat: string;
  codSect: string;
  libAmgr: string;
  cod: string;
  geom: string;
  patrimoine: PatrimoineEnum;
}
