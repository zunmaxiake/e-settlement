var Promise = require('bluebird');
const memberModel = require('../models/member');
const Op = require('sequelize').Op;

class memberCtl {
    async getMembers(reqQuery){
        console.log("getMembers:")
        let pageIndex = reqQuery.pageIndex-1;
        console.log("pageIndex：",pageIndex)
        let pageSize = reqQuery.pageSize;
        let condtionStr = "";
        if(reqQuery.condition && reqQuery.condition !=""){
            let condition = reqQuery.condition;
            condtionStr="where mnickname like '%"+condition+"%' or mrename like '%"+condition+"%' "
        }
        let sqlArray = [
            "SELECT *,COUNT(1) OVER() AS total ",
            "from dbo.member ",
            condtionStr,
            "order by mid asc ",
            "OFFSET :pageSize * :pageIndex ROW FETCH NEXT :pageSize ROWS ONLY"
        ];
        let sql = sqlArray.join('');
        let member = await global.sequelize.query(sql,
        {replacements:{pageSize:parseInt(pageSize),pageIndex:parseInt(pageIndex)}, type: sequelize.QueryTypes.SELECT});
        return member;    
    };

    async createMember(data) {
        let result = await memberModel.sync({ force: false }).then(() => {
            return memberModel.create(data);
        })
        return result;
    };

    async deleteMemberByMId(mid){
        let result = await memberModel.destroy({ where: { "mid": mid } });
        return result;
    };
}

module.exports= new memberCtl;