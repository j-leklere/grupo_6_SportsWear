module.exports = (sequelize, dataTypes) => {
  let alias = "User";

  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: dataTypes.STRING,
    },
    apellido: {
      type: dataTypes.STRING,
    },
    genero: {
      type: dataTypes.STRING,
    },
    fechaDeNacimiento: {
      type: dataTypes.DATE,
    },
    email: {
      type: dataTypes.STRING,
    },
    password: {
      type: dataTypes.STRING,
    },
    genero: {
      type: dataTypes.STRING,
    },
    telefono: {
      type: dataTypes.STRING,
    },
    category_id: {
      type: dataTypes.INTEGER,
      foreignKey: true,
    },
    image: {
      type: dataTypes.STRING,
    }
  };

  let config = {
    tableName: "users",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at"
  }

  const User = sequelize.define(alias, cols, config);

  User.associate = (models) => {
    User.belongsTo(models.Category, {
      as: "categories",
      foreignKey: "category_id",
    });
    User.hasMany(models.Cart, {
      as: "cart",
    });
  };

  return User;
};
