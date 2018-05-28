//=============================================================================
// MPP_SimpleEquipWindows.js
//=============================================================================
// Copyright (c) 2015 Mokusei Penguin
// Released under the MIT license
// http://opensource.org/licenses/mit-license.php
//=============================================================================

/*:
 * @plugindesc 【MPP ver.1.3】装備画面の簡略化
 * @author 木星ペンギン
 *
 * @help 装備画面を簡略化します。
 * 
 * ・装備コマンドから[装備]を削除し、上下キーで移動できるように変更します。
 * ・マウスorタッチ操作の場合、装備コマンドと装備スロットどちらも選択できます。
 * 
 * ================================
 * 制作 : 木星ペンギン
 * URL : http://woodpenguin.blog.fc2.com/
 *
 */

(function() {

var Alias = {};

//-----------------------------------------------------------------------------
// Window_Selectable

//13
Alias.WiSe_initialize = Window_Selectable.prototype.initialize;
Window_Selectable.prototype.initialize = function(x, y, width, height) {
    this._linkWindows = [];
    Alias.WiSe_initialize.call(this, x, y, width, height);
};

//82
Alias.WiSe_select = Window_Selectable.prototype.select;
Window_Selectable.prototype.select = function(index) {
    Alias.WiSe_select.call(this, index);
    if (this._linkWindows.length > 0 && index >= 0) {
        for (var i = 0; i < this._linkWindows.length; i++) {
            this._linkWindows[i].deselect();
        }
    }
};

Window_Selectable.prototype.setLink = function(window) {
    this._linkWindows.push(window);
    window._linkWindows.push(this);
};

Window_Selectable.prototype.isLinkMain = function() {
    return this._linkWindows.length === 0 || this.index() >= 0;
};

//205
Alias.WiSe_cursorDown = Window_Selectable.prototype.cursorDown;
Window_Selectable.prototype.cursorDown = function(wrap) {
    var bottom = this.maxItems() - this.maxCols();
    if (this.index() < bottom || !this.isHandled('down')) {
        Alias.WiSe_cursorDown.call(this, wrap);
    } else if (wrap) {
        this.callHandler('down');
        this.updateInputData();
    }
};

//214
Alias.WiSe_cursorUp = Window_Selectable.prototype.cursorUp;
Window_Selectable.prototype.cursorUp = function(wrap) {
    if (this.index() >= this.maxCols() || !this.isHandled('up')) {
        Alias.WiSe_cursorUp.call(this, wrap);
    } else if (wrap) {
        this.callHandler('up');
        this.updateInputData();
    }
};

//287
Alias.WiSe_processCursorMove = Window_Selectable.prototype.processCursorMove;
Window_Selectable.prototype.processCursorMove = function() {
    if (this.isLinkMain()) Alias.WiSe_processCursorMove.call(this);
};

//314
Alias.WiSe_processHandling = Window_Selectable.prototype.processHandling;
Window_Selectable.prototype.processHandling = function() {
    if (this.isLinkMain()) Alias.WiSe_processHandling.call(this);
};

//328
Alias.WiSe_processWheel = Window_Selectable.prototype.processWheel;
Window_Selectable.prototype.processWheel = function() {
    if (this.isLinkMain()) Alias.WiSe_processWheel.call(this);
};

//521
Alias.WiSe_callUpdateHelp = Window_Selectable.prototype.callUpdateHelp;
Window_Selectable.prototype.callUpdateHelp = function() {
    if (this.isLinkMain()) Alias.WiSe_callUpdateHelp.call(this);
};

//-----------------------------------------------------------------------------
// Window_EquipCommand

//22
Window_EquipCommand.prototype.maxCols = function() {
    return 2;
};

//26
Window_EquipCommand.prototype.makeCommandList = function() {
    //this.addCommand(TextManager.equip2,   'equip');
    this.addCommand(TextManager.optimize, 'optimize');
    this.addCommand(TextManager.clear,    'clear');
};

Window_EquipCommand.prototype.playOkSound = function() {
};

Alias.WiEqCo_isCancelEnabled = Window_EquipCommand.prototype.isCancelEnabled;
Window_EquipCommand.prototype.isCancelEnabled = function() {
    return Alias.WiEqCo_isCancelEnabled.call(this) && this.index() >= 0;
};

//-----------------------------------------------------------------------------
// Window_EquipSlot

//19
Alias.WiEqSl_setActor = Window_EquipSlot.prototype.setActor;
Window_EquipSlot.prototype.setActor = function(actor) {
    var needRefresh = (this._actor !== actor);
    Alias.WiEqSl_setActor.call(this, actor);
    if (needRefresh) this.reselect();
};

Alias.WiEqSl_isCancelEnabled = Window_EquipSlot.prototype.isCancelEnabled;
Window_EquipSlot.prototype.isCancelEnabled = function() {
    return Alias.WiEqSl_isCancelEnabled.call(this) && this.index() >= 0;
};

//-----------------------------------------------------------------------------
// Scene_Equip

//32
Alias.ScEq_createCommandWindow = Scene_Equip.prototype.createCommandWindow;
Scene_Equip.prototype.createCommandWindow = function() {
    Alias.ScEq_createCommandWindow.call(this);
    this._commandWindow.setHandler('down', this.commandDown.bind(this));
    this._commandWindow.setHandler('up',   this.commandUp.bind(this));
    this._commandWindow.deselect();
};

//47
Alias.ScEq_createSlotWindow = Scene_Equip.prototype.createSlotWindow;
Scene_Equip.prototype.createSlotWindow = function() {
    Alias.ScEq_createSlotWindow.call(this);
    this._slotWindow.setHandler('cancel',   this.popScene.bind(this));
    this._slotWindow.setHandler('pagedown', this.nextActor.bind(this));
    this._slotWindow.setHandler('pageup',   this.previousActor.bind(this));
    this._slotWindow.setHandler('down',     this.slotDown.bind(this));
    this._slotWindow.setHandler('up',       this.slotUp.bind(this));
    this._slotWindow.setLink(this._commandWindow);
    this._slotWindow.activate();
    this._slotWindow.select(0);
};

Scene_Equip.prototype.commandDown = function() {
    this._slotWindow.select(0);
};

Scene_Equip.prototype.commandUp = function() {
    this._slotWindow.select(this._slotWindow.maxItems() - 1);
};

Scene_Equip.prototype.slotDown = function() {
    this._commandWindow.select(0);
};

Scene_Equip.prototype.slotUp = function() {
    this._commandWindow.select(0);
};

//102
Alias.ScEq_onSlotOk = Scene_Equip.prototype.onSlotOk;
Scene_Equip.prototype.onSlotOk = function() {
    Alias.ScEq_onSlotOk.call(this);
    this._commandWindow.deactivate();
};

//112
Alias.ScEq_onItemOk = Scene_Equip.prototype.onItemOk;
Scene_Equip.prototype.onItemOk = function() {
    Alias.ScEq_onItemOk.call(this);
    this._commandWindow.activate();
};

//122
Alias.ScEq_onItemCancel = Scene_Equip.prototype.onItemCancel;
Scene_Equip.prototype.onItemCancel = function() {
    Alias.ScEq_onItemCancel.call(this);
    this._commandWindow.activate();
};

//127
Alias.ScEq_onActorChange = Scene_Equip.prototype.onActorChange;
Scene_Equip.prototype.onActorChange = function() {
    Alias.ScEq_onActorChange.call(this);
    this._slotWindow.activate();
};

})();
