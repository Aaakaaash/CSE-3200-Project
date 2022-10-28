const {Sequelize} = require("sequelize")

const sequelize = new Sequelize("eTicketing-App", "postgres", "nafis1234", {
  host: "localhost",
  dialect: "postgres",
  operatorsAliases: false,
  pool:{
    max: 5,
    min: 0,
    acquire: 3000,
    idle: 10000
  },

});

sequelize.sync();
sequelize
.authenticate()
.then(()=>console.log("Database is Connected Successfully!!!"))
.catch((err)=> console.log("Error occured in Connecting Database: ",err))

module.exports = sequelize