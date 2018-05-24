var frameView = Backbone.View.extend({
    el: ".row",
    events: {
        'click #memberManage': "memberManageGo"
    },
    initialize: function () {
        this.memberCollection = new memberCollection();
        var initTemplatesBind = this.initTemplates.bind(this);//??
        var that = this;
        initTemplatesBind()
            .then(function () {
                that.render();
            })
    },
    initTemplates: function () {
        var initFrame = this.initTemplate.bind(this, TEMPLETE_FRAME_URL, TEMPLETE_FRAME_NAME);
        return $.when(initFrame());//??
    },
    initTemplate: function (url, name) {
        var getTemplateBind = frameUtil.getTemplate.bind(this, url);
        var setFrameTemplateBind = this.setFrameTemplate.bind(this, name);
        return getTemplateBind().then(setFrameTemplateBind);
    },
    setFrameTemplate: function (templateName, myTemplate) {
        var def = $.Deferred();
        var promise = def.promise();
        this[templateName] = _.template(myTemplate);
        def.resolve(this[templateName]);
        return promise;
    },
    render: function () {
        this.renderFrame();
    },
    renderFrame: function () {
        this.$el.append(this[TEMPLETE_FRAME_NAME]());
    },
    memberManageGo: function () {
        console.log("0")
        setMenu('memberManage');
        this.$el.find(".middleContent").remove();
        console.log("1")
        this.memberCollection.trigger("changeCondition", { pageIndex: 1, pageSize: 10 });
        this.$el.append(new memberView({ collection: this.memberCollection }).el);
    }
})

$(function () {
    new frameView({});
})