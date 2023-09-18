module.exports = {
    HOST: "localhost",
    USER: "victo_hugo",
    PASSWORD: "12345678",
    DB: "sistemaDeCadastro",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };