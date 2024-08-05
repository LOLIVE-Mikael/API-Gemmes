import { Sequelize, DataTypes, Model, Optional } from 'sequelize';

// Définir les types pour les attributs de votre modèle
export interface GemAttributes {
  id: number;
  name: string;
  color: string;
  rarity: string;
  created?: Date;
}

// Définir les attributs créables (ceux que l'utilisateur peut fournir lors de la création)
interface GemCreationAttributes extends Optional<GemAttributes, 'id' | 'created'> {}

// Définir le modèle Gem
class Gem extends Model<GemAttributes, GemCreationAttributes> implements GemAttributes {
  public id!: number;
  public name!: string;
  public color!: string;
  public rarity!: string;
  public created?: Date;

  // Vous pouvez également définir des méthodes d'instance ou de classe ici si nécessaire
}

// Fonction pour initialiser le modèle
const defineGemModel = (sequelize: Sequelize) => {
  Gem.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: { msg: 'Le nom ne peut pas être vide.' },
          notNull:  { msg: 'Vous devez donner un nom.'}
        }
      },
      color: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: 'La couleur ne peut pas être vide.' },
          notNull: { msg: 'Vous devez indiquer une couleur.'}
        }
      },
      rarity: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: {
            args: [['Commun', 'Peu commun', 'Rare', 'Très rare']],
            msg: 'La rareté doit être l\'une des valeurs suivantes: Commun, Peu commun, Rare, Très rare.'
          }
        }
      }
    },
    {
      sequelize,
      tableName: 'gems',
      timestamps: true,
      createdAt: 'created',
      updatedAt: false
    }
  );

  return Gem
};

export default defineGemModel;