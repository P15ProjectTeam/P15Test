/*:ja
 * @plugindesc デフォルト戦闘にいろいろな音声を適用します。
 * Ver2.1.0
 * @author 黒崎 綾人
 * 
 * @param susActors
 * @desc 再生を許可するアクター番号。
 * ここに含まれるアクターのデータベース番号のみ音声を適用
 * @default [1,2,3,4]
 * 
 * @param susEnemies
 * @desc 再生を許可するエネミー番号。
 * ここに含まれるエネミーのデータベース番号のみ音声を適用
 * @default []
 * 
 * @param Turn
 * @desc ターンが回ってきた時のファイルを使用するかどうか。
 * ON / true    OFF / false
 * @default true
 *
 * @param Attack
 * @desc 通常攻撃ファイルを使用するかどうか。
 * ON / true    OFF / false
 * @default true
 * 
 * @param Guard
 * @desc 防御ファイルを使用するかどうか。
 * ON / true    OFF / false
 * @default true
 * 
 * @param Skill
 * @desc スキル使用ファイルを使用するかどうか。
 * ON / true    OFF / false
 * @default true
 * 
 * @param Item
 * @desc アイテム使用ファイルを使用するかどうか。
 * ON / true    OFF / false
 * @default true
 * 
 * @param Critical
 * @desc 会心ファイルを使用するかどうか。
 * ON / true    OFF / false
 * @default true
 * 
 * @param Counter
 * @desc 反撃ファイルを使用するかどうか。
 * ON / true    OFF / false
 * @default true
 * 
 * @param Miss
 * @desc MISSファイルを使用するかどうか。
 * ON / true    OFF / false
 * @default true
 * 
 * @param Eva
 * @desc 回避ファイルを使用するかどうか。
 * ON / true    OFF / false
 * @default true
 * 
 * @param Dead
 * @desc 戦闘不能ファイルを使用するかどうか。
 * ON / true    OFF / false
 * @default true
 * 
 * @param Dying
 * @desc 瀕死で被弾ファイルを使用するかどうか。
 * ON / true    OFF / false
 * @default true
 * 
 * @param Damage
 * @desc 被弾ファイルを使用するかどうか。
 * ON / true    OFF / false
 * @default true
 * 
 * @param DamageState
 * @desc ステート付加時の被弾ファイルを使用するかどうか。
 * ON / true    OFF / false
 * @default true
 * 
 * @param Recover
 * @desc 回復を受けた時のファイルを使用するかどうか。
 * ON / true    OFF / false
 * @default true
 * 
 * @param Inbattle
 * @desc 戦闘開始ファイルを使用するかどうか。
 * ON / true    OFF / false
 * @default true
 * 
 * @param Endbattle
 * @desc 戦闘終了ファイルを使用するかどうか。
 * ON / true    OFF / false
 * @default true
 * 
 * @param Escapefai
 * @desc 逃走失敗ファイルを使用するかどうか。
 * ON / true    OFF / false
 * @default true
 * 
 * @param Escapesus
 * @desc 逃走成功ファイルを使用するかどうか。
 * ON / true    OFF / false
 * @default true
 * 
 * @param Spsk
 * @desc 指定スキルID用ファイルを使用するかどうか。
 * SkillIdarrayに含まれるスキル番号を採用する。
 * @default true
 * 
 * @param SkillIdarray
 * @desc この配列に含まれるスキルIDで指定ファイルを呼び出す。
 * spsk8 のファイルがあればスキル８番専用音声を再生する。
 * @default [8, 9, 10]
 * 
 * @param Spst
 * @desc 指定ステートID用ファイルを使用するかどうか。
 * StateIdarrayに含まれるステート番号を採用する。
 * @default true
 * 
 * @param StateIdarray
 * @desc この配列に含まれるステートIDで指定ファイルを呼び出す。
 * spst2 のファイルがあれば毒を受けた専用音声を再生する。
 * @default [2, 3, 4]
 * 
 * @param ----エネミー----
 * @desc 以下、エネミー側の音声適用設定です
 * 基本はアクターと同じになります。
 * @default 
 *
 * @param AttackEnemy
 * @desc 通常攻撃ファイルを使用するかどうか。
 * ON / true    OFF / false
 * @default true
 * 
 * @param GuardEnemy
 * @desc 防御ファイルを使用するかどうか。
 * ON / true    OFF / false
 * @default true
 * 
 * @param SkillEnemy
 * @desc スキル使用ファイルを使用するかどうか。
 * ON / true    OFF / false
 * @default true
 * 
 * @param CriticalEnemy
 * @desc 会心ファイルを使用するかどうか。
 * ON / true    OFF / false
 * @default true
 * 
 * @param CounterEnemy
 * @desc 反撃ファイルを使用するかどうか。
 * ON / true    OFF / false
 * @default true
 * 
 * @param MissEnemy
 * @desc MISSファイルを使用するかどうか。
 * ON / true    OFF / false
 * @default true
 * 
 * @param EvaEnemy
 * @desc 回避ファイルを使用するかどうか。
 * ON / true    OFF / false
 * @default true
 * 
 * @param DeadEnemy
 * @desc 戦闘不能ファイルを使用するかどうか。
 * ON / true    OFF / false
 * @default true
 * 
 * @param DyingEnemy
 * @desc 瀕死で被弾ファイルを使用するかどうか。
 * ON / true    OFF / false
 * @default true
 * 
 * @param DamageEnemy
 * @desc 被弾ファイルを使用するかどうか。
 * ON / true    OFF / false
 * @default true
 * 
 * @param DamageStateEnemy
 * @desc ステート付加時の被弾ファイルを使用するかどうか。
 * ON / true    OFF / false
 * @default true
 * 
 * @param RecoverEnemy
 * @desc 回復を受けた時のファイルを使用するかどうか。
 * ON / true    OFF / false
 * @default true
 * 
 * @param InbattleEnemy
 * @desc 戦闘開始ファイルを使用するかどうか。
 * ON / true    OFF / false
 * @default true
 * 
 * @param EndbattleEnemy
 * @desc 戦闘終了ファイルを使用するかどうか。
 * ON / true    OFF / false
 * @default true
 * 
 * @param SpskEnemy
 * @desc 指定スキルID用ファイルを使用するかどうか。
 * SkillIdarrayに含まれるスキル番号を採用する。
 * @default true
 * 
 * @param SkillIdarrayEnemy
 * @desc この配列に含まれるスキルIDで指定ファイルを呼び出す。
 * spsk8 のファイルがあればスキル８番専用音声を再生する。
 * @default [8, 9, 10]
 * 
 * @param SpstEnemy
 * @desc 指定ステートID用ファイルを使用するかどうか。
 * StateIdarrayに含まれるステート番号を採用する。
 * @default true
 * 
 * @param StateIdarrayEnemy
 * @desc この配列に含まれるステートIDで指定ファイルを呼び出す。
 * spst2 のファイルがあれば毒を受けた専用音声を再生する。
 * @default [2, 3, 4, 8]
 * 
 * @help どのアクションを適用するかの詳細を決定するコマンドがあります。
 *
 * 【このプラグインを使うのに必要な必須プラグイン】
 * VCData.js
 * AudioVoice.js
 * 
 * 【必須jsonデータを入れよう】
 * ゲームフォルダ内のdataに BattleVoice.json を入れて使用ください。
 * ファイル名の詳細な書き換えは上記のjsonファイル内部を書き換えるか加筆してください。
 * プラグインの改造は直接このプラグインを書き換えてください。
 * 
 * 【このプラグインが拡張する標準アクション音声ファイル名】
 * ターンに適用されるファイル名＞＞ turn1~3種類まで
 * 通常攻撃に適用されるファイル名＞＞ attack1~3種類まで
 * 防御に適用されるファイル名＞＞ guard1~3種類まで
 * スキル使用時に適用されるファイル名＞＞ skill1~3種類まで
 * アイテム使用時に適用されるファイル名＞＞ item1~3種類まで
 * 会心時に適用されるファイル名＞＞ critical1~3種類まで
 * 攻撃にMISSした時に適用されるファイル名＞＞ miss1~3種類まで
 * 攻撃を回避した時に適用されるファイル名＞＞ eva1~3種類まで
 * 戦闘不能になった時に適用されるファイル名＞＞ dead1~3種類まで
 * 瀕死で被弾した時に適用されるファイル名＞＞ dying1~3種類まで
 * 被弾時に適用されるファイル名＞＞ damage1~3種類まで
 * ステート付加時に適用されるファイル名＞＞ stete1~3種類まで
 * 回復を受けた時に適用されるファイル名＞＞ recovery1~3種類まで
 * 戦闘開始時に適用されるファイル名＞＞ inbattle1~3種類まで
 * 戦闘終了時に適用されるファイル名＞＞ endobattle1~3種類まで
 * 逃走失敗時に適用されるファイル名＞＞ escapefai1~3種類まで
 * 逃走成功時に適用されるファイル名＞＞ escapesus1~3種類まで
 * 指定されたスキルを使用時に適用されるファイル名＞＞ spsk(n)※
 * ※複数指定スキル音声を用意する場合は、spska(n) spskb(n) 等を用意する。
 * 指定されたステートが付加された時に適用されるファイル名＞＞ spst(n)※
 * ※複数指定ステート音声を用意する場合は、spsta(n) spstb(n) 等を用意する。
 * ※※指定スキル・ステート音声を採用する際、複数のファイルを用意するときは
 * ___直接BattleVoice.jsonデータを変更する必要があります。
 */
(function() {

var parameters = PluginManager.parameters('BasicBattleVoice');
var susActors = JSON.parse(parameters['susActors']);
var susEnemies = JSON.parse(parameters['susEnemies']);
var Turn = JSON.parse(parameters['Turn']);
var Attack = JSON.parse(parameters['Attack']);
var Guard = JSON.parse(parameters['Guard']);
var Skill = JSON.parse(parameters['Skill']);
var Item = JSON.parse(parameters['Item']);
var Critical = JSON.parse(parameters['Critical']);
var Counter = JSON.parse(parameters['Counter']);
var Miss = JSON.parse(parameters['Miss']);
var Eva = JSON.parse(parameters['Eva']);
var Dead = JSON.parse(parameters['Dead']);
var Dying = JSON.parse(parameters['Dying']);
var Damage = JSON.parse(parameters['Damage']);
var DamageState = JSON.parse(parameters['DamageState']);
var Recover = JSON.parse(parameters['Recover']);
var Inbattle = JSON.parse(parameters['Inbattle']);
var Endbattle = JSON.parse(parameters['Endbattle']);
var Escapefai = JSON.parse(parameters['Escapefai']);
var Escapesus = JSON.parse(parameters['Escapesus']);
var Spsk = JSON.parse(parameters['Spsk']);
var SkillIdarray = JSON.parse(parameters['SkillIdarray']);
var Spst = JSON.parse(parameters['Spst']);
var StateIdarray = JSON.parse(parameters['StateIdarray']);
var AttackEnemy = JSON.parse(parameters['AttackEnemy']);
var GuardEnemy = JSON.parse(parameters['GuardEnemy']);
var SkillEnemy = JSON.parse(parameters['SkillEnemy']);
var CriticalEnemy = JSON.parse(parameters['CriticalEnemy']);
var CounterEnemy = JSON.parse(parameters['CounterEnemy']);
var MissEnemy = JSON.parse(parameters['MissEnemy']);
var EvaEnemy = JSON.parse(parameters['EvaEnemy']);
var DeadEnemy = JSON.parse(parameters['DeadEnemy']);
var DyingEnemy = JSON.parse(parameters['DyingEnemy']);
var DamageEnemy = JSON.parse(parameters['DamageEnemy']);
var DamageStateEnemy = JSON.parse(parameters['DamageStateEnemy']);
var RecoverEnemy = JSON.parse(parameters['RecoverEnemy']);
var InbattleEnemy = JSON.parse(parameters['InbattleEnemy']);
var EndbattleEnemy = JSON.parse(parameters['EndbattleEnemy']);
var SpskEnemy = JSON.parse(parameters['SpskEnemy']);
var SkillIdarrayEnemy = JSON.parse(parameters['SkillIdarrayEnemy']);
var SpstEnemy = JSON.parse(parameters['SpstEnemy']);
var StateIdarrayEnemy = JSON.parse(parameters['StateIdarrayEnemy']);

Array.prototype.contain = function(value) {
	for(var i = 0; i < this.length; i++) {
		if(this[i] === value) {
			return true;
		}
	}
	return false;
};

BattleManager.ChangeAddedStates = function(target) {
  return target.result().addedStateObjects().length > 0;
};

BattleManager.JugdeClear = function() {
    this._deadJugde = false;
    this._dyingJugde = false;
};

var _BattleManager_setup = BattleManager.setup;
BattleManager.setup = function(troopId, canEscape, canLose) {
    this._lastActorid = -1;
    this._lastEnemyindex = -1;
    this._deadJugde = false;
    this._dyingJugde = false;
    this._Debaffs = [0,1,2,3,4,5,6,7]

    _BattleManager_setup.call(this, troopId, canEscape, canLose);
};

var _BattleManager_startBattle = BattleManager.startBattle;
BattleManager.startBattle = function() {

    _BattleManager_startBattle.call(this);


    var randid = Math.floor(Math.random() * ($gameParty.battleMembers().length)) + 0;
    if (Inbattle) {
        while (true) {
            if ($gameParty.battleMembers()[randid].hp !== 0) {
                var startsubject = $gameParty.battleMembers()[randid];
                this._lastActorid = startsubject.actorId();
                var rand = Math.floor(Math.random() * ($databattlevoice.voices[11].length)) + 0;
                if (susActors.contain(this._lastActorid)) {
                    AudioVoice.playbattleVc($databattlevoice.voices[11][rand], startsubject);
                }
                break;
            }
            var randid = Math.floor(Math.random() * ($gameParty.battleMembers().length)) + 0;
        }
    }

    var randid = Math.floor(Math.random() * ($gameTroop.members().length)) + 0;
    
    while (true) {
        if (InbattleEnemy && $gameTroop.members()[randid].hp !== 0) {
            var startsubject = $gameTroop.members()[randid];
            this._lastEnemyindex = startsubject.index();
            var rand = Math.floor(Math.random() * ($databattlevoice.voices[11].length)) + 0;
            if (susEnemies.contain(startsubject.enemyId())) {
                AudioVoice.playbattleVc($databattlevoice.voices[11][rand], startsubject);
            }
            break;
        }
        var randid = Math.floor(Math.random() * ($gameTroop.members().length)) + 0;
    }

};

var _BattleManager_endBattle = BattleManager.endBattle;
BattleManager.endBattle = function(result) {

    _BattleManager_endBattle.call(this, result)


    if (result === 0) {
        if (!Endbattle) {
            return;
        }
        var rand = Math.floor(Math.random() * ($databattlevoice.voices[12].length)) + 0;
        if (susActors.contain(this._lastActorid)) {
            AudioVoice.playbattleVc($databattlevoice.voices[12][rand], $gameActors.actor(this._lastActorid));
        }
    }

    if ($gameParty.isAllDead()) {
        if (!EndbattleEnemy) {
            return;
        }
        var rand = Math.floor(Math.random() * ($databattlevoice.voices[12].length)) + 0;
        if (susEnemies.contain(startsubject.enemyId())) {
            AudioVoice.playbattleVc($databattlevoice.voices[12][rand], $gameTroop.members()[this._lastEnemyindex]);
        }
    }
};

var _BattleManager_processEscape = BattleManager.processEscape;
BattleManager.processEscape = function() {

    _BattleManager_processEscape.call(this)

    if (!this._escaped) {
        if (!Escapesus) {
            return this._escaped;
        }
        var rand = Math.floor(Math.random() * ($databattlevoice.voices[13].length)) + 0;
        if (!susActors.contain(this._lastActorid)) {
            return this._escaped;
        }
        AudioVoice.playbattleVc($databattlevoice.voices[13][rand], $gameActors.actor(this._lastActorid));
    } else {
        if (!Escapefai) {
            return this._escaped;
        }
        var rand = Math.floor(Math.random() * ($databattlevoice.voices[14].length)) + 0;
        if (!susActors.contain(this._lastActorid)) {
            return this._escaped;
        }
        AudioVoice.playbattleVc($databattlevoice.voices[14][rand], $gameActors.actor(this._lastActorid));
    }
    return this._escaped;
};

var _BattleManager_changeActor = BattleManager.changeActor;
BattleManager.changeActor = function(newActorIndex, lastActorActionState) {
    var lastActor = this.actor();
    _BattleManager_changeActor.call(this, newActorIndex, lastActorActionState)
    this._actorIndex = newActorIndex;
    var newActor = this.actor();
    if (newActor && newActor.hp != 0) {
        if (!Turn) {
            return;
        }
        if (!susActors.contain(newActor.actorId())) {
            return;
        }
        this._lastActorid = newActor.actorId();
        var rand = Math.floor(Math.random() * ($databattlevoice.voices[17].length)) + 0;
        AudioVoice.playbattleVc($databattlevoice.voices[17][rand], newActor);
    }
    
};

var _BattleManager_endTurn = BattleManager.endTurn;
BattleManager.endTurn = function() {

     BattleManager.JugdeClear();
    _BattleManager_endTurn.call(this);

};

var _BattleManager_startAction = BattleManager.startAction;
BattleManager.startAction = function() {

     _BattleManager_startAction.call(this);

     var action = this._subject.currentAction();

    if (this._subject.isActor() && !susActors.contain(this._subject.actorId())) {
        return;
    }
    if (!this._subject.isActor() && !susEnemies.contain(this._subject.enemyId())) {
        return;
    }

     if (this._subject.isActor() && action.isAttack()) {
         if (!Attack) {
             return;
         }

         this._lastActorid = this._subject.actorId();
         var rand = Math.floor(Math.random() * ($databattlevoice.voices[0].length)) + 0;
         AudioVoice.playbattleVc($databattlevoice.voices[0][rand], this._subject);

     } else if (this._subject.isActor() && action.isGuard()) {
         if (!Guard) {
             return;
         }

         var rand = Math.floor(Math.random() * ($databattlevoice.voices[1].length)) + 0;
         AudioVoice.playbattleVc($databattlevoice.voices[1][rand], this._subject);

     } else if (this._subject.isActor() && action.isSkill() && 
                action.isRecover() && SkillIdarray.contain(action._item.itemId())) {
         if (!Spsk) {
             return;
         }

         var str = String(action._item.itemId());
         var rand = Math.floor(Math.random() * ($databattlevoice.voices[15].length)) + 0;
         AudioVoice.explaybattleVc($databattlevoice.voices[15][rand], this._subject, str);

         return;

     } else if (this._subject.isActor() && action.isSkill() && 
                SkillIdarray.contain(action._item.itemId())) {
         if (!Spsk) {
             return;
         }

         var str = action._item.itemId().toString(10);
         var rand = Math.floor(Math.random() * ($databattlevoice.voices[15].length)) + 0;
         AudioVoice.explaybattleVc($databattlevoice.voices[15][rand], this._subject, str);

     } else if (this._subject.isActor() && action.isSkill() && action.isDamage()) {
         if (!Skill) {
             return;
         }

         this._lastActorid = this._subject.actorId();
         var rand = Math.floor(Math.random() * ($databattlevoice.voices[2].length)) + 0;
         AudioVoice.playbattleVc($databattlevoice.voices[2][rand], this._subject);


     } else if (this._subject.isActor() && action.isItem()) {
         if (!Item) {
             return;
         }

         this._lastActorid = this._subject.actorId();
         var rand = Math.floor(Math.random() * ($databattlevoice.voices[3].length)) + 0;
         AudioVoice.playbattleVc($databattlevoice.voices[3][rand], this._subject);

     }

     // エネミー

     if (!this._subject.isActor() && action.isAttack()) {
         if (!AttackEnemy) {
             return;
         }

         this._lastEnemyindex = this._subject.index();
         var rand = Math.floor(Math.random() * ($databattlevoice.voices[0].length)) + 0;
         AudioVoice.playbattleVc($databattlevoice.voices[0][rand], this._subject);

     } else if (!this._subject.isActor() && action.isGuard()) {
         if (!GuardEnemy) {
             return;
         }

         var rand = Math.floor(Math.random() * ($databattlevoice.voices[1].length)) + 0;
         AudioVoice.playbattleVc($databattlevoice.voices[1][rand], this._subject);

     } else if (!this._subject.isActor() && action.isSkill() && 
                action.isRecover() && SkillIdarrayEnemy.contain(action._item.itemId())) {
         if (!SpskEnemy) {
             return;
         }

         var str = String(action._item.itemId());
         var rand = Math.floor(Math.random() * ($databattlevoice.voices[15].length)) + 0;
         AudioVoice.explaybattleVc($databattlevoice.voices[15][rand], this._subject, str);

         return;

     } else if (!this._subject.isActor() && action.isSkill() && 
                SkillIdarrayEnemy.contain(action._item.itemId())) {
         if (!SpskEnemy) {
             return;
         }

         var str = action._item.itemId().toString(10);
         var rand = Math.floor(Math.random() * ($databattlevoice.voices[15].length)) + 0;
         AudioVoice.explaybattleVc($databattlevoice.voices[15][rand], this._subject, str);

     } else if (!this._subject.isActor() && action.isSkill() && action.isDamage()) {
         if (!SkillEnemy) {
             return;
         }

         this._lastEnemyindex = this._subject.index();
         var rand = Math.floor(Math.random() * ($databattlevoice.voices[2].length)) + 0;
         AudioVoice.playbattleVc($databattlevoice.voices[2][rand], this._subject);


     } else if (!this._subject.isActor() && action.isItem()) {
         if (!Item) {
             return;
         }

         var rand = Math.floor(Math.random() * ($databattlevoice.voices[3].length)) + 0;
         AudioVoice.playbattleVc($databattlevoice.voices[3][rand], this._subject);

     }
};


var _BattleManager_invokeNormalAction = BattleManager.invokeNormalAction;
BattleManager.invokeNormalAction = function(subject, target) {

    _BattleManager_invokeNormalAction.call(this, subject, target);

    var result = target.result();
    // alert(target.isActor());

    for(var i = 0; i < result.addedDebuffs.length; i++) {
        var debuff = this._Debaffs.contain(result.addedDebuffs[i]);
        if (debuff) {
            break;
        }
    }

    if (subject.isActor() && (result.hpDamage > 0 && result.critical)) {
         if (!Critical || !susActors.contain(subject.actorId())) {
             return;
         }

        var rand = Math.floor(Math.random() * ($databattlevoice.voices[4].length)) + 0;
        AudioVoice.playbattleVc($databattlevoice.voices[4][rand], subject);

     } else if (subject.isActor() && (result.missed || result.evaded) && target.hp != 0) {
         if (!Miss || !susActors.contain(subject.actorId())) {
             return;
         }

        var rand = Math.floor(Math.random() * ($databattlevoice.voices[5].length)) + 0;
        AudioVoice.playbattleVc($databattlevoice.voices[5][rand], subject);
        return;

    } else if (!subject.isActor() && target.isActor() && !BattleManager.ChangeAddedStates(target) &&
              (result.missed || result.evaded || result.hpDamage == 0) && target.hp != 0 && !debuff &&
              susActors.contain(target.actorId())) {
        if (!Eva) {
            return;
        }
     
        var rand = Math.floor(Math.random() * ($databattlevoice.voices[6].length)) + 0;
        AudioVoice.playbattleVc($databattlevoice.voices[6][rand], target);
        return;

    }
    if (!subject.isActor() && target.hp == 0 && !this._deadJugde && susActors.contain(target.actorId())) {
        if (!Dead) {
            return;
        }

        this._deadJugde = true;
        var rand = Math.floor(Math.random() * ($databattlevoice.voices[7].length)) + 0;
        AudioVoice.playbattleVc($databattlevoice.voices[7][rand], target);

    } else if (!subject.isActor() && target.hp != 0 && target.hp <= target.mhp / 4 &&
               result.hpDamage > 0 && !this._dyingJugde && susActors.contain(target.actorId())) {
        if (!Dying) {
            return;
        }

        this._dyingJugde = true;
        var rand = Math.floor(Math.random() * ($databattlevoice.voices[8].length)) + 0;
        AudioVoice.playbattleVc($databattlevoice.voices[8][rand], target);

    } else if (!subject.isActor() && target.hp != 0 && susActors.contain(target.actorId()) &&
              (result.hpDamage > 0 || result.mpDamage > 0) || debuff) {
        if (!Damage) {
            return;
        }

        var rand = Math.floor(Math.random() * ($databattlevoice.voices[9].length)) + 0;
        AudioVoice.playbattleVc($databattlevoice.voices[9][rand], target);

    } else if (!subject.isActor() && target.hp != 0 && BattleManager.ChangeAddedStates(target) &&
               susActors.contain(target.actorId())) {
        if (!DamageState) {
            if (!Damage) {
                return;
            }
            return;
        }
        for(var i = 0; i < result.addedStateObjects().length; i++) {
            if (StateIdarray.contain(result.addedStateObjects()[i].id)) {
                var str = String(result.addedStateObjects()[i].id);
                var rand = Math.floor(Math.random() * ($databattlevoice.voices[19].length)) + 0;
                AudioVoice.explaybattleVc($databattlevoice.voices[19][rand], target, str);
                break;
            } else {
                var rand = Math.floor(Math.random() * ($databattlevoice.voices[18].length)) + 0;
                AudioVoice.playbattleVc($databattlevoice.voices[18][rand], target);
                break;
            }
	    }

    } else if ((subject.isActor() && target.isActor()) && 
              (result.hpDamage < 0 || result.mpDamage < 0) && (subject.actorId() !== target.actorId()) && 
               susActors.contain(target.actorId())) {
        if (!Recover) {
            return;
        }

        var rand = Math.floor(Math.random() * ($databattlevoice.voices[10].length)) + 0;
        AudioVoice.playbattleVc($databattlevoice.voices[10][rand], target);

    }

    // エネミー

    if (!subject.isActor() && (result.hpDamage > 0 && result.critical)) {
         if (!CriticalEnemy || !susEnemies.contain(subject.enemyId())) {
             return;
         }

        var rand = Math.floor(Math.random() * ($databattlevoice.voices[4].length)) + 0;
        AudioVoice.playbattleVc($databattlevoice.voices[4][rand], subject);

     } else if (!subject.isActor() && (result.missed || result.evaded) && target.hp != 0) {
         if (!MissEnemy || !susEnemies.contain(subject.enemyId())) {
             return;
         }

        var rand = Math.floor(Math.random() * ($databattlevoice.voices[5].length)) + 0;
        AudioVoice.playbattleVc($databattlevoice.voices[5][rand], subject);
        return;

    } else if (subject.isActor() && !target.isActor() && susEnemies.contain(target.enemyId()) &&
              !BattleManager.ChangeAddedStates(target) &&
              (result.missed || result.evaded || result.hpDamage == 0) && target.hp != 0) {
        if (!EvaEnemy) {
            return;
        }
     
        var rand = Math.floor(Math.random() * ($databattlevoice.voices[6].length)) + 0;
        AudioVoice.playbattleVc($databattlevoice.voices[6][rand], target);
        return;

    }

    if (subject.isActor() && !target.isActor() && target.hp == 0 && !this._deadJugde && susEnemies.contain(target.enemyId())) {
        if (!DeadEnemy) {
            return;
        }

        this._deadJugde = true;
        var rand = Math.floor(Math.random() * ($databattlevoice.voices[7].length)) + 0;
        AudioVoice.playbattleVc($databattlevoice.voices[7][rand], target);

    } else if (subject.isActor() && !target.isActor() && target.hp != 0 && target.hp <= target.mhp / 4 && susEnemies.contain(target.enemyId()) &&
               result.hpDamage > 0 && !this._dyingJugde) {
        if (!DyingEnemy) {
            return;
        }

        this._dyingJugde = true;
        var rand = Math.floor(Math.random() * ($databattlevoice.voices[8].length)) + 0;
        AudioVoice.playbattleVc($databattlevoice.voices[8][rand], target);

    } else if (subject.isActor() && !target.isActor() && target.hp != 0 && susEnemies.contain(target.enemyId()) &&
              (result.hpDamage > 0 || result.mpDamage > 0)) {
        if (!DamageEnemy) {
            return;
        }

        var rand = Math.floor(Math.random() * ($databattlevoice.voices[9].length)) + 0;
        AudioVoice.playbattleVc($databattlevoice.voices[9][rand], target);

    } else if (subject.isActor() && !target.isActor() && target.hp != 0 && susEnemies.contain(target.enemyId()) &&
               BattleManager.ChangeAddedStates(target)) {
        if (!DamageStateEnemy) {
            if (!DamageEnemy) {
                return;
            }
            return;
        }
        for(var i = 0; i < result.addedStateObjects().length; i++) {
            if (StateIdarrayEnemy.contain(result.addedStateObjects()[i].id)) {
                var str = String(result.addedStateObjects()[i].id);
                var rand = Math.floor(Math.random() * ($databattlevoice.voices[19].length)) + 0;
                AudioVoice.explaybattleVc($databattlevoice.voices[19][rand], target, str);
                break;
            } else {
                var rand = Math.floor(Math.random() * ($databattlevoice.voices[18].length)) + 0;
                AudioVoice.playbattleVc($databattlevoice.voices[18][rand], target);
                break;
            }
	    }

    } else if ((!subject.isActor() && !target.isActor()) && susEnemies.contain(target.enemyId()) &&
              (result.hpDamage < 0 || result.mpDamage < 0) && (subject.enemyId() !== target.enemyId())) {
        if (!RecoverEnemy) {
            return;
        }

        var rand = Math.floor(Math.random() * ($databattlevoice.voices[10].length)) + 0;
        AudioVoice.playbattleVc($databattlevoice.voices[10][rand], target);

    }
};

var _BattleManager_invokeCounterAttack = BattleManager.invokeCounterAttack;
BattleManager.invokeCounterAttack = function(subject, target) {

    _BattleManager_invokeCounterAttack.call(this, subject, target);

    if (target.isActor() && susActors.contain(target.actorId())) {
        if (!Counter) {
            return;
        }
        
        var rand = Math.floor(Math.random() * ($databattlevoice.voices[16].length)) + 0;
        AudioVoice.playbattleVc($databattlevoice.voices[16][rand], target);
    } else if (!target.isActor() && susEnemies.contain(target.enemyId())) {
        if (!CounterEnemy) {
            return;
        }
        
        var rand = Math.floor(Math.random() * ($databattlevoice.voices[16].length)) + 0;
        AudioVoice.playbattleVc($databattlevoice.voices[16][rand], target);
    }
};

var _Scene_Battle_terminate = Scene_Battle.prototype.terminate;
Scene_Battle.prototype.terminate = function() {
    _Scene_Battle_terminate.call(this)
    AudioVoice.stopVc();
};


})();
