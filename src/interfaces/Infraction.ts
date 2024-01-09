import CpgEnum from '@/enums/CpgEnum';
import InfractionNiveauEnum from '@/enums/InfractionNiveauEnum';
import InfractionTypeEnum from '@/enums/InfractionTypeEnum';

export default interface Infraction {
  id: string;
  categorie: string;
  sousCategorie: string;
  type: { name: string; value: InfractionTypeEnum };
  libelle: string;
  niveau: { name: string; value: InfractionNiveauEnum };
  montant: number;
  cpg: { name: string; value: CpgEnum };
}
