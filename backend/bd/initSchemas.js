const sequelize = require('../bd/sequelize');
sequelize.sync({ force: false })
    .then(() => {
        console.log('Tabelas sincronizadas com sucesso!');
    })
    .catch(err => {
        console.error('Erro ao sincronizar as tabelas:', err);
    });
