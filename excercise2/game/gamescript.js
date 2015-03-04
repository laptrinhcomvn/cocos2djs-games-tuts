var gameScene = cc.Scene.extend({
    onEnter : function(){
        this._super();

        var gameLayer = new game();
        gameLayer.init();
        this.addChild(gameLayer);
    }
});


var game = cc.Layer.extend({
    init:function(){
        this._super();

        for (i = 0; i < 16; i++) {
            var tile = cc.Sprite.create("assets/cover.png");
            this.addChild(tile,0);
            this.setPosition(49+i%4*74,400-Math.floor(i/4)*74);
        };
    }
});