/*:
 * @plugindesc プレイヤーだけでなく敵もスライドインするようになります。
 * @author Lib
 *
 * @param slideinSpeed
 * @desc スライドインする速度(数値が大きいほど遅い)
 * 初期値: 16
 * @default 16
 *
 * @help
 * プラグインコマンドはありません。
 * キャラの登場移動が少しだけ早くなります。
 *
 */

(function() {

var parameters = PluginManager.parameters('EnemySlideIn');
Sprite_Actor.slideinSpeed = eval(String(parameters['slideinSpeed']));
Sprite_Enemy.slideinSpeed = eval(String(parameters['slideinSpeed']));

Sprite_Actor.prototype.startEntryMotion = function() {
    if (this._actor && this._actor.canMove()) {
        this.startMotion('walk');
        this.startMove(0, 0, Sprite_Actor.slideinSpeed);
    } else if (!this.isMoving()) {
        this.refreshMotion();
        this.startMove(0, 0, 0);
    };
};

var _Sprite_Enemy_prototype_setBattler = Sprite_Enemy.prototype.setBattler
Sprite_Enemy.prototype.setBattler = function(battler) {
	_Sprite_Enemy_prototype_setBattler.call(this, battler);
	if($gameSystem.isSideView()){
    	this._offsetX = -Graphics.boxWidth;			//スクリーンサイズによって差が出るのはよくない？
   		this.startMove(0, 0, Sprite_Enemy.slideinSpeed);	//差分動く
	};
};

})();
