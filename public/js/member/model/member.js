var memberModel = Backbone.Model.extend({
    urlRoot: "/member",
    idAttribute: "id",
    defaults: {},
    initialize: function () { }
});

var memberCollection = Backbone.Collection.extend({
    Model: memberModel,
    url: "/member/data",
    initialize: function () {
        this.initDatas();
        this.on("changeCondition", this.fetchMembers);
    },
    initDatas: function () {
        this.pageIndex = 1;
        this.pageSize = 10;
        this.totalDatas = 0;
        this.totalPages = 1;
        this.condition = "";
    },
    setCondition: function (data) {
        this.pageIndex = (data && data.pageIndex) || this.pageIndex;
        this.pageSize = (data && data.pageSize) || this.pageSize;
        this.condition = (data && data.condition) || this.condition;
    },
    getCondition: function () {
        var data = {};
        data.pageIndex = this.pageIndex;
        data.pageSize = this.pageSize;
        data.condition = this.condition;
        return data;
    },
    fetchMembers: function (data) {
        var that = this;
        var def = $.Deferred();
        var promise = def.promise();
        this.setCondition(data);
        this.fetch({
            data: this.getCondition(),
            success: function (collection, response, options) {
                if (response[0]) {
                    that.totalDatas = response[0].total;
                    that.totalPages = (Math.ceil(that.totalDatas / that.pageSize) === 0) ? 1 : Math.ceil(that.totalDatas / that.pageSize);
                }
                that.trigger("afterFetcherMembers");
                return def.resolve(collection);
            },
            error: function (collection, response, options) {
                return def.reject("get data failed");
            }
        });
        return promise;
    }
})