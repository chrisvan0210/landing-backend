module.exports = {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    dialect: "mysql",
    logging: false,
    query : {
        raw:true
    },
    define: { freezeTableName: true },
    timezone: "+08:00",
    dialectOptions: {
      dateStrings: true,
      typeCast: true
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  