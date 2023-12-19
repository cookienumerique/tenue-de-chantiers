import LabelValue from '@/interfaces/LabelValue';

export type LabelValueCategorie = LabelValue & {
  categorie: string;
  sousCategorie: string;
};
