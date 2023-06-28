const { where } = require('sequelize');
const Lead = require('../models/Lead');

module.exports = class LeadsController{
    /*
    #swagger.tags = ['Leads']
    */
    static async listarTodos(req,res){
        const leads = await Lead.findAll({where:{habilitado: true}});
        res.status(200).json(leads);
    }

    /*
    #swagger.tags = ['Leads']
    */
    static async getLeadById(req,res){

        const id = req.params.id;

        const lead = await Lead.findOne({where:{id:id, habilitado: true}});
        res.status(200).json(lead);

    }

    /*
    #swagger.tags = ['Leads']
    */
    static async createLead(req,res){

        let {nome, email, whatsapp, interesses} = req.body;

        try {
            const lead = await Lead.create({
                nome: nome,
                email: email,
                whatsapp: whatsapp,
                interesses: interesses
            });
            res.status(201).json(lead)
        } catch ({errors}) {
            res.status(500).json({"message": "Ocorreu um erro ao salvar o Lead."});
            
        }


    }

    /*
    #swagger.tags = ['Leads']
    */
    static async updateLead(req,res){
        const id = req.params.id;

        let {nome, email, whatsapp, interesses, habilitado} = req.body;

        try {
            await Lead.update({
                nome: nome,
                email: email,
                whatsapp: whatsapp,
                interesses: interesses,
                habilitado: habilitado
            }, {where: {id: id}});
            res.status(204).json()
        } catch (error) {
            res.status(500).json({"message":"Ocorreu um erro ao alterar o Lead."});
        }
    }

    /*
    #swagger.tags = ['Leads']
    */
    static async deleteLead(req,res){
        const id = req.params.id;

        await Lead.update({habilitado: false}, {where:{id:id}});
        res.status(204).json();
    }



}