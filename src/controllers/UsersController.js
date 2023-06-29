const bcrypt = require('bcrypt');
const User = require('../models/User');
const Autentication = require('../middleware/Autentication');
const verifyUser = require('../functions/verifyUser');


module.exports = class UsersController{
    /*
    #swagger.tags = ['Users']
    */
    static async findAll(req, res){
        const users = await User.findAll({});
        return res.status(200).json(users);
    };

    /*
    #swagger.tags = ['Users']
    */
    static async getUserById(req, res){
        const id = req.params.id;
        const user = await User.findOne({where: {id: id}});
        return res.status(200).json(user);
    };

    /*
    #swagger.tags = ['Users']
    */
    static async createUser(req, res){
        const { email, password } = req.body;
        const user = verifyUser(email, password);     

        console.log(user)

        if(user && user[0] && Object.keys(user[0]).includes("error")) return res.status(400).json({"message": "Falha ao criar usuário!"});
        try {
            const salt = bcrypt.genSaltSync(10);
            const newPassword = bcrypt.hashSync(password, salt)
            user.password = newPassword;        
            await User.create(user);
            return res.status(201).json({"message": "Usuário criada com sucesso!"});
        } catch(err) {
            console.error({"message": "Falha ao criar usuário!"});
        };
        return res.status(400).json({"message": "Falha ao criar usuário!"});
    };

    /*
    #swagger.tags = ['Users']
    */
    static async login(req, res) {
        const { email, password } = req.body;

        await User.findOne({where:{ email: email }}).then(async(user) => { 
            if (bcrypt.compareSync(password, user.password)) {
                const token = Autentication.gerarToken(user);
                await res.cookie("token", token, {
                  httpOnly: true,
                });
                console.log('Você está logado com e-mail e senha\n', token);
                return res.status(200).json(user);
            } else {
                return res.status(401).json({"message": "Usuário não encontrada!"});
            };
        }).catch(() => {
            return res.status(401).json({"message": "Usuário não encontrada!"});
        });   
    };

    /*
    #swagger.tags = ['Users']
    */
    static async updateUser(req, res){
        const id = req.params.id;
        const { email, password } = req.body;
      
        try {
            const salt = bcrypt.genSaltSync(10);
            const newPassword = bcrypt.hashSync(password, salt)            
            await User.update({email: email, password: newPassword}, {where:{id:id}});
            return res.status(200).json({"message": "Usuário atualizado com sucesso!"});
        } catch(err) {
            return res.status(400).json({"message": "Falha ao atualizar usuário!"});
        };
    };

    /*
    #swagger.tags = ['Users']
    */
    static async deleteUser(req, res){
        const id = req.params.id;
        try {      
            await User.destroy({where:{id:id}});
            return res.status(200).json({"message": "Usuário deletado com sucesso!"});
        } catch(err) {
            return res.status(400).json({"message": "Falha ao deletar usuário!"});
        };
    };
    /*
    #swagger.tags = ['Users']
    */
    static async logout(req, res){
        if(req.cookie) {
            res.clearCookie('token');
            return res.status(200).json({"message": "Saiu com sucesso!"})
        }
        return res.status(500).json({"message": "Falha ao sair!"})
    };    
};