module.exports = function configsApp(express, app){
    
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

    // Imports Models
    const Lead = require('../models/Lead');

    // Rotas
    const routes = require('../routes');
    app.use('/v1', routes);

    app.use((req,res,next) => {
        res.redirect('/docs');
    })

}