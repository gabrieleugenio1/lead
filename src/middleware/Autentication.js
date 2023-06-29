const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_JWT || 'dsadasdsadsafd';

module.exports = class Autentication {

    static gerarToken(user){
        const payload = {email: user.email };
        const options = {expiresIn: "10h"};
        return jwt.sign(payload, secret, options);
    } 
   
    static verificaToken(req, res, next){
        const token = req.cookies.token;
        if(!token){
            return res.status(401).json({"message": "Faça login para acessar o contéudo!"});
        }

        jwt.verify(token, secret, (err, decoded) => {
            if(err){
                return res.status(401).json({"message": "Token inválido!"});
            }
            console.log(decoded);
            req.email = decoded.email;      
            next();
        });
    };

};