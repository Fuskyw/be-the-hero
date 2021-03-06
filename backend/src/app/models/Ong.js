import Sequelize, { Model } from 'sequelize';

class Ong extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.STRING,
          primaryKey: true,
        },
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        whatsapp: Sequelize.STRING,
        city: Sequelize.STRING,
        uf: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Ong;
