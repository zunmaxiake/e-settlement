var Sequelize = require('sequelize');

var memberModel = {
    mid: {        
        type: Sequelize.INTEGER,
        autoIncrement:true,
        initialAutoIncrement:1,
        primaryKey: true        
    },
    mrename: Sequelize.STRING(50),
    mnickname: Sequelize.STRING(50),
    mwebname: Sequelize.STRING(50),
    mpassword: Sequelize.STRING(50), 
    mopenpassword: Sequelize.STRING(50), 
    mage: Sequelize.STRING(50), 
    msex: Sequelize.STRING(50), 
    mtel: Sequelize.STRING(50), 
    midentity: Sequelize.STRING(50), 
    mmobile: Sequelize.STRING(50), 
    mbank: Sequelize.STRING(50), 
    mbankcard: Sequelize.STRING(50), 
    mbank2: Sequelize.STRING(50), 
    bankname: Sequelize.STRING(50), 
    mbankcard2: Sequelize.STRING(50),
    mgrade: Sequelize.INTEGER(10), 
    miszs: Sequelize.INTEGER(10), 
    mnote: Sequelize.STRING(400),
    mregdate: Sequelize.DATE(10), 
    mchkdate: Sequelize.DATE(10), 
    mtjid: Sequelize.INTEGER(10), 
    mislock: Sequelize.INTEGER(10),
    mbdmoney: Sequelize.DECIMAL(10,2),
    maddress: Sequelize.STRING(255), 
    mqq: Sequelize.STRING(50), 
    mpid: Sequelize.STRING(50), 
    mcid: Sequelize.STRING(50), 
    mvid: Sequelize.STRING(50), 
    mmoney: Sequelize.DECIMAL(10,2), 
    mmoney2: Sequelize.DECIMAL(10,2), 
    mbv: Sequelize.DECIMAL(10,2), 
    mallbv: Sequelize.DECIMAL(10,2), 
    misnew: Sequelize.INTEGER(10), 
    mpshop: Sequelize.INTEGER(10), 
    msj: Sequelize.INTEGER(10), 
    mshopjb: Sequelize.INTEGER(10), 
    misnull: Sequelize.INTEGER(10), 
    mm1: Sequelize.INTEGER(10), 
    mm2: Sequelize.INTEGER(10), 
    mm3: Sequelize.INTEGER(10), 
    mm4: Sequelize.DECIMAL(10,2), 
    mm5: Sequelize.DECIMAL(10,2), 
    mm6: Sequelize.DECIMAL(10,2), 
    mm7: Sequelize.STRING(50), 
    mm8: Sequelize.STRING(50), 
    mm9: Sequelize.INTEGER(10), 
    mlayerlist : Sequelize.STRING(2000) 
};

module.exports = member = global.sequelize.define('member',memberModel,{timestamps: false,'freezeTableName': true});