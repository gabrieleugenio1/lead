require('dotenv').config();
const app = require('./app');
const PORT = process.env.PORT || 3000;
const db = require('./database/conexao');


db.sync()
.then(() => {
    app.listen(PORT, () => {
        console.log('Servidor rodando na porta: ', PORT);
    });
}).catch(error => {
    console.log(error);
})
