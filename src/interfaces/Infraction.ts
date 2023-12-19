import CpgEnum from '@/enums/CpgEnum';
import InfractionNiveauEnum from '@/enums/InfractionNiveauEnum';
import InfractionTypeEnum from '@/enums/InfractionTypeEnum';

export default interface Infraction {
  id: string;
  categorie: string;
  sousCategorie: string;
  type: InfractionTypeEnum;
  libelle: string;
  niveau: InfractionNiveauEnum;
  montant: number;
  cpg: CpgEnum;
}
