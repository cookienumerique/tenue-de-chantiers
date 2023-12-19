import PatrimoineEnum from '@/enums/PatrimoineEnum';

export default interface Zac {
  id: number;
  nom: string;
  geom: string;
  patrimoine: PatrimoineEnum;
}
