module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Gem', {
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
      },
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false
    });
  };
  