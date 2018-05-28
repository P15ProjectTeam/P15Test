//=====================================
// AddBarsToOptionsScene.js
//=====================================
// Copyright (c) 2017 Tsumio
// This software is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// Version
// 1.1.0 2017/5/21 画像でバーとボタンを指定できる機能を追加
// 1.0.0 2017/5/21 公開
// ----------------------------------------------------------------------------
// [Blog]   : http://ntgame.wpblog.jp/
// [Twitter]: https://twitter.com/TsumioNtGame
//=============================================================================
/*:
 * @plugindesc オプション画面にバーを追加します
 * @author ツミオ
 * 
 * 
 * @param バーの位置
 * @desc バーの位置を指定してください。(デフォルト値：150）
 * @default 150
 * 
 * @param バーの長さ
 * @desc バーの長さを指定してください。(デフォルト値：150）
 * @default 150
 * 
 * @param バーの色
 * @desc バーの色を指定してください。(デフォルト値：#000）
 * @default #000
 * 
 * @param ボタンの色
 * @desc ボタンの色を指定してください。(デフォルト値：#0099CC）
 * @default #0099CC
 * 
 * 
 * @param ゲージの移動量
 * @desc ゲージの移動量を指定してください。10未満の値を設定すると、ゲージの移動に違和感が生じます。(デフォルト値：10）
 * @default 10
 * 
 * @param ボタンの画像
 * @desc ボタンの画像を指定したい場合、ここで指定してください。必須ではありません。(img\tsumioの配下に置いてください)
 * @default
 * 
 * @param ボタンの画像のX座標を補正
 * @desc ボタンの画像の表示位置がおかしい場合、このパラメーターで調整してください。（デフォルト値：0）
 * @default 0
 * 
 * @param ボタンの画像のY座標を補正
 * @desc ボタンの画像の表示位置がおかしい場合、このパラメーターで調整してください。（デフォルト値：0）
 * @default 0
 * 
 * @param バーの画像
 * @desc バーの画像を指定したい場合、ここで指定してください。必須ではありません。(img\tsumioの配下に置いてください)
 * @default
 * 
 * @help プラグインコマンド
 * このプラグインには、プラグインコマンドはありません。
 * 
 * 
 * 【使用方法】
 * プラグインを導入するだけで使えます。
 * 画像を使用する場合、画像の幅とプラグインパラメーターの「バーの長さ」を同じにしてください。
 * 画像使用時、ボタンの座標に違和感がある場合は「ボタンの画像のX座標を補正」「ボタンの画像のY座標を補正」パラメーターを使用して調整してください。
 * 
 * 【謝辞】
 * 栗下義孝さんからアイデアをいただきました。
 * [Twitter（18禁）]:https://twitter.com/kurige_y
 * 
 * 
 * 利用規約：
 * 作者に無断で改変、再配布が可能で、利用形態（商用、18禁利用等）
 * についても制限はありません。
 * 自由に使用してください。
 */

(function () {

    var N = 'AddBarsToOptionsScene';
  	var param = PluginManager.parameters(N);
    var $bar_position_ABOS = Number(param['バーの位置'])||150;
    var $bar_length_ABOS = Number(param['バーの長さ'])||150;
    var $bar_color_ABOS = String(param['バーの色'])||'#000';
    var $button_color_ABOS = String(param['ボタンの色'])||'#0099CC';
    var $button_offset_ABOS = Number(param['ゲージの移動量'])||10;
    var $img_bar_ABOS = String(param['バーの画像'])||'';
    var $img_button_ABOS = String(param['ボタンの画像'])||'';
    var $button_x_offset_ABOS = Number(param['ボタンの画像のX座標を補正'])||0;
    var $button_y_offset_ABOS = Number(param['ボタンの画像のY座標を補正'])||0;

//-----------------------------------------------------------------------------
// プラグインコマンドの設定
//-----------------------------------------------------------------------------
    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function (command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
    };


//==============================
// ImageManagerにオリジナルフォルダ追加
//==============================
ImageManager.loadTsumio = function(filename) {
    return this.loadBitmap('img/tsumio/', filename, 0, true);
};

//-----------------------------------------------------------------------------
// Window_Optionsクラスに機能を追加する
//-----------------------------------------------------------------------------

var _Window_Options_initialize = Window_Options.prototype.initialize;
Window_Options.prototype.initialize = function() {
    _Window_Options_initialize.call(this);
};

var _Window_Options_update = Window_Options.prototype.update;
Window_Options.prototype.update = function() {
    _Window_Options_update.call(this);
    this.updateBarSprite();
};


var _Window_Options_drawItem = Window_Options.prototype.drawItem;
Window_Options.prototype.drawItem = function(index) {
    _Window_Options_drawItem.apply(this, arguments);
    this.initialize_BarSprite();
    //ここからバー追加
    //this.addBar(index);
};

//文字のスプライト初期化
Window_Options.prototype.initialize_BarSprite = function(){
    if(this.sprite_bar === undefined)
    {


        /*ここから画像用の定義*/
        this.sprite_img_bar = [];
        this.sprite_img_button = [];
        if($img_bar_ABOS !== '' || $img_bar_ABOS !== undefined)
        {
            //バー画像
            var bitmap = ImageManager.loadTsumio($img_bar_ABOS);
            for(var i = 0; i < 12; i++)
            {
                this.sprite_img_bar[i] = new Sprite(bitmap);
                //一回飛ばす
                this.sprite_img_bar[i].y = -814;
                this.addChild(this.sprite_img_bar[i]);
            }
        }
        
        //スプライト生成
        this.sprite_bar = new Sprite();//内側
        this.sprite_bar.bitmap = new Bitmap(Graphics.width, Graphics.height);
        //addChild
        this.addChild(this.sprite_bar);

        if($img_button_ABOS !== '' || $img_button_ABOS !== undefined)
        {
            //ボタン画像
            var bitmap = ImageManager.loadTsumio($img_button_ABOS);
            for(var i = 0; i < 12; i++)
            {
                this.sprite_img_button[i] = new Sprite(bitmap);
                //一回飛ばす
                this.sprite_img_button[i].y = -814;
                this.addChild(this.sprite_img_button[i]);
            }
        }

        //バグ回避用
        this.button_position = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    }
};


Window_Options.prototype.addBar = function(index){
    var symbol = this.commandSymbol(index);
    var rect = this.itemRectForText(index);
    var value = this.getConfigValue(symbol);
    
    if (this.isVolumeSymbol(symbol)) {
        //適切な位置に調整
        var _temp_button_position = this.getShouldDrawButtonPosition(value);
        this.button_position[index] = $bar_position_ABOS + _temp_button_position;
        //タッチされたかどうか判定
        var _on_touch_button = this.isTouchButton(rect.x + this.button_position[index],rect.y + 37);

        if(_on_touch_button)
        {
            this.changeButtonPosition(rect.x + this.button_position[index],rect.y + 37,index);
        }

        //this.drawText('あははははうんこだー！', rect.x, rect.y, 50 , 'left');
        this.drawBar(rect.x + $bar_position_ABOS, rect.y + 37, rect.x + $bar_position_ABOS + $bar_length_ABOS,rect.y + 37, $bar_color_ABOS, 6,index);
        this.drawButton(rect.x + this.button_position[index], rect.y + 37, 10, $button_color_ABOS,index);
    }
};

Window_Options.prototype.getShouldDrawButtonPosition = function(value){
    //var max_position = $bar_position_ABOS + $bar_length_ABOS;
    //var min_position = $bar_position_ABOS;
    //console.log(value);
    return $bar_length_ABOS * value / 100;
};




Window_Options.prototype.drawBar = function(x, y, x2, y2,color,lineWidth,index){
    //画像なしの場合
    if($img_bar_ABOS === '' || $img_bar_ABOS === undefined)
    {
        //色指定
        this.sprite_bar.bitmap.context.strokeStyle = color;
        this.sprite_bar.bitmap.context.fillStyle = color;
        //太さ指定
        this.sprite_bar.bitmap.context.lineWidth = lineWidth;
        //直線の描画
        this.sprite_bar.bitmap.context.beginPath();
        this.sprite_bar.bitmap.context.moveTo(x, y);
        this.sprite_bar.bitmap.context.lineTo(x2, y2);
        this.sprite_bar.bitmap.context.closePath();
        this.sprite_bar.bitmap.context.stroke();
    }else{
        //画像ありの場合
        for(var i = 0; i < this.sprite_img_bar.length;i++)
        {
            this.sprite_img_bar[index].x = x
            this.sprite_img_bar[index].y = y - (this.sprite_img_bar[index].height / 2);
        }
    }
};

Window_Options.prototype.drawButton = function(x , y , radius , color,index){
    if($img_button_ABOS === '' || $img_button_ABOS === undefined)
    {
        //画像なしの場合
        this.sprite_bar.bitmap.drawCircle(x,y,radius + 2,'#000');//外枠
        this.sprite_bar.bitmap.drawCircle(x,y,radius,color);//内側
    }else
    {
        //画像ありの場合
        for(var i = 0; i < this.sprite_img_button.length;i++)
        {
            this.sprite_img_button[index].x = x - (this.sprite_img_button[index].width / 2) + $button_x_offset_ABOS;
            this.sprite_img_button[index].y = y - (this.sprite_img_button[index].height / 2) + $button_y_offset_ABOS;
        }
    }
};

Window_Options.prototype.isTouchButton = function(position_x,position_y){
    //タッチ座標取得
    var x = this.canvasToLocalX(TouchInput.x);
    var y = this.canvasToLocalY(TouchInput.y);

    position_x -= 15;//座標取得位置の調整
    position_y -= 15;//座標取得位置の調整

    if(this._touching == true)
    {
        //x～x＋30とy～y＋30を取得する
        if(((x >= position_x - 500) && (x <= position_x + 500)) && (y >= position_y) && (y <= position_y + 30))
        {
            //console.log("タッチされたよ");
            return true;//タッチされた
        }
    }
    return false;//タッチされてない
};

Window_Options.prototype.changeButtonPosition = function(position_x,position_y,index){
    //タッチ座標取得
    var x = this.canvasToLocalX(TouchInput.x);
    var y = this.canvasToLocalY(TouchInput.y);

    if(TouchInput.isMoved() && TouchInput.isLongPressed())
    {
        if(position_x + 10 < x)
        {
            this.cursorRight();
        }
        if(position_x - 10 > x)
        {
            this.cursorLeft();
        }
    }
};

Window_Options.prototype.updateBarSprite = function(){
    this.sprite_bar.bitmap.clear();
    var topIndex = this.topIndex();
    for (var i = 0; i < this.maxPageItems(); i++) {
        var index = topIndex + i;
        if (index < this.maxItems()) {
            this.addBar(index);
        }
    }
};

Window_Options.prototype.volumeOffset = function() {
    return $button_offset_ABOS;
};

})();