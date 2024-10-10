const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('silos', 'admin', 'admin', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
});

sequelize.authenticate()
    .then(() => {
        console.log('Conexão estabelecida com sucesso!');
    })
    .catch(err => {
        console.error('Não foi possível conectar ao banco de dados:', err);
    });

module.exports = sequelize;
