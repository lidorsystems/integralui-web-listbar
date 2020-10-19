/*
  filename: integralui.listgroup.js
  version : 20.2.0
  Copyright © 2020 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web Lite" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web Lite License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/lite/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
import{c as css,h as html}from"../external/lit-element.js";import{c as classMap}from"../external/class-map.js";import{s as styleMap}from"../external/style-map.js";import{IntegralUIObjectState,IntegralUITheme}from"./integralui.enums.js";import IntegralUIDataService from"../services/integralui.data.service.js";import{iuiHeaderItemDefaultStyle}from"../styles/integralui.header.style.js";import"./integralui.header.js";import IntegralUIGroupBox from"./integralui.groupbox.js";import{iuiListGroupDefaultStyle}from"../styles/integralui.listgroup.style.js";import{iuiListGroupOfficeStyle}from"../themes/office/integralui.listgroup.office.js";import{iuiListGroupMidnightStyle}from"../themes/midnight/integralui.listgroup.midnight.js";class IntegralUIListGroup extends IntegralUIGroupBox{_ini(){super._ini();this._cDtaService=new IntegralUIDataService();this._cDtaItems=[];this._iLt=[];this._cntDy="none";this._cCtrStyStt=iuiListGroupDefaultStyle;this._iniStyle()}connectedCallback(){}disconnectedCallback(){}_iniContent(){let t=this,e=setTimeout(function(){if(t._contentElem)t._mxBlkHt=t._contentElem.offsetHeight;clearTimeout(e)},100)}_iniStyle(){this._gnrCsNm="iui-listgroup";this._hdrCsNm=this._gnrCsNm+"-header";this._headerExpandBoxClassName=this._hdrCsNm+"-expand-box";this._cntCSName=this._gnrCsNm+"-content";this._itemClassName=this._gnrCsNm+"-item";this._dfSty={general:{disabled:this._gnrCsNm+"-disabled",focused:this._gnrCsNm+"-focused",normal:this._gnrCsNm,hovered:this._gnrCsNm+"-hovered",selected:this._gnrCsNm+"-selected"},header:{general:{disabled:this._hdrCsNm+"-disabled",focused:this._hdrCsNm+"-focused",normal:this._hdrCsNm,hovered:this._hdrCsNm+"-hovered",selected:this._hdrCsNm+"-selected"},expandBox:this._headerExpandBoxClassName},content:{general:this._cntCSName,expanded:this._cntCSName+"-expand",collapsed:this._cntCSName+"-collapse"},item:{general:{disabled:this._itemClassName+"-disabled",focused:this._itemClassName+"-focused",normal:this._itemClassName,hovered:this._itemClassName+"-hovered",selected:this._itemClassName+"-selected"}}};this.refresh()}attributeChangedCallback(t,e,s){super.attributeChangedCallback(t,e,s)}static get properties(){return{items:{type:Array}}}get items(){return this._cDtaItems}set items(t){const e=this._cDtaItems;this._cDtaItems=t;this._uDt();this.requestUpdate("items",e)}_uDt(){this._cDtaService.init([{data:this.items}])}_oHdrClk(t){let e=this;if(e._enbl&&1===t.detail.buttons){e.selected=!0;if(!e._sprsCbk&&e._pCtr&&e._pCtr.invokeCtrlMethod)e._pCtr.invokeCtrlMethod("SELECT_GROUP",e);if(!e._sprsCbk&&!e.expanded)e.expanded=!0;e._isClk=!0;e._clkPs=e._cmnSrv.getClientPos(t,e._headerElem);let s=setTimeout(function(){e._isClk=!1;clearTimeout(s)},500)}}_oHdrExp(t){this._sprsCbk=!0;this.expanded=!this.expanded;t.detail.stopPropagation()}_tglCnt(){let t=this,e=0,s=0;this._cntOp=1;if(t.expanded){t._cntDy="block";if(t.allowAnimation){let i=setInterval(function(){if(e<t._mxBlkHt){e+=s=0===s?1:s+2;t._cntHt=e+"px";t.update()}else{t._cntHt="auto";t._expdSt="none";t._calAfEv(!0,t._sprsCbk);t._sprsCbk=!1;t._uPrn();t.update();clearInterval(i)}},15)}else{t._cntHt="auto";t._expdSt="none";t._calAfEv(!0,t._sprsCbk);t._sprsCbk=!1;t._uPrn();t.update()}}else{t._mxBlkHt=t._contentElem.offsetHeight;e=t._mxBlkHt;if(t.allowAnimation){let i=setInterval(function(){if(e>0){e-=s=0===s?1:s+2;t._cntHt=e+"px";t.update()}else{t._cntDy="none";t._cntHt="0";t._expdSt="none";t._calAfEv();t._sprsCbk=!1;t._uPrn();t.update();clearInterval(i)}},15)}else{t._cntDy="none";t._cntHt="0";t._expdSt="none";t._calAfEv();t._sprsCbk=!1;t._uPrn();t.update()}}}invokeCtrlMethod(t,e){let s=!0;if(this._enbl)switch(t){case"ITEM_SELECT":if(e){this.clearSelection();e.state|=IntegralUIObjectState.Selected;this.selected=!0;if(!this._sprsCbk&&this._pCtr&&this._pCtr.invokeCtrlMethod)this._pCtr.invokeCtrlMethod("SELECT_GROUP",this);this._inkEv("afterSelect",{group:this._cDta,item:this._gCmpDt(e)})}break;default:s=!0}return s}_gCmpDt(t){if(t)if(t.data)return t.data;else{let e=this._gItDtIdx(t);if(this.items&&e>=0&&e<this.items.length)return this.items[e]}return null}_gItCIdx(t){return t&&this._iLt?this._iLt.indexOf(t):-1}_gItDtIdx(t){if(t){let e=this._gItCIdx(t);if(this.items&&e>=0&&e<this.items.length)return e}return-1}clearSelection(t){this._iLt.forEach(function(e){if(e!==t)e.state&=~IntegralUIObjectState.Selected})}_gCtrSty(){let t={};if(this._ctrSz.width>0)t.width=this._ctrSz.width+"px";if(this._ctrSz.height>0)t.height=this._ctrSz.height+"px";return t}_gItGnSty(t){if(this._cmnSrv.isString(t))return t;else if(t)return{disabled:this._cmnSrv.isFieldAvailable(t.disabled,this._itemClassName+"-disabled"),focused:this._cmnSrv.isFieldAvailable(t.focused,this._itemClassName+"-focused"),hovered:this._cmnSrv.isFieldAvailable(t.hovered,this._itemClassName+"-hovered"),normal:this._cmnSrv.isFieldAvailable(t.normal,this._itemClassName),selected:this._cmnSrv.isFieldAvailable(t.selected,this._itemClassName+"-selected")};else return{disabled:this._dfSty.item.general.disabled,focused:this._dfSty.item.general.focused,hovered:this._dfSty.item.general.hovered,normal:this._dfSty.item.general.normal,selected:this._dfSty.item.general.selected}}_gItSty(t){return{general:this._gItGnSty(t.general)}}_uSty(t){if(t)this._opt.currentStyle={general:this._gGnSty(t.general),header:this._gHdrSty(t.header),content:this._gCntSty(t.content),item:this._gItSty(t.item)};else this._opt.currentStyle={general:{disabled:this._dfSty.general.disabled,focused:this._dfSty.general.focused,hovered:this._dfSty.general.hovered,normal:this._dfSty.general.normal,selected:this._dfSty.general.selected},header:{general:{disabled:this._dfSty.header.general.disabled,focused:this._dfSty.header.general.focused,hovered:this._dfSty.header.general.hovered,normal:this._dfSty.header.general.normal,selected:this._dfSty.header.general.selected},expandBox:this._dfSty.header.expandBox},content:{general:this._dfSty.content.general,expanded:this._dfSty.content.expanded,collapsed:this._dfSty.content.collapsed},item:{general:{disabled:this._dfSty.item.general.disabled,focused:this._dfSty.item.general.focused,hovered:this._dfSty.item.general.hovered,normal:this._dfSty.item.general.normal,selected:this._dfSty.item.general.selected}}}}_uThSt(t){this._cThmSettings=css``;switch(t){case IntegralUITheme.Office:this._cThmSettings.cssText=this._cmnSrv.replaceAll(iuiListGroupOfficeStyle.cssText,"../icons",this._cRsPt);break;case IntegralUITheme.Midnight:this._cThmSettings.cssText=this._cmnSrv.replaceAll(iuiListGroupMidnightStyle.cssText,"../icons",this._cRsPt);break;default:this._cThmSettings.cssText=""}}firstUpdated(t){this._uRf();this._iniContent();this.updateLayout()}refresh(){this._uSty(this.controlStyle);this._uCtrCs();this._upCntCs();this._uHdrBlkCs();this.update();this._uRf()}render(){return html`\n            <style>\n				${this._cCtrStyStt}\n				${iuiHeaderItemDefaultStyle}\n                ${this._cThmSettings}\n				${this._cCmSty}\n			</style>\n            <div data-ctrl="listgroup" class=${classMap(this._gCtrCs())} style=${styleMap(this._gCtrSty())}>\n                <iui-header id="group-header" .controlStyle="${this._gCHdrSty()}" .customStyle="${[this._cCtrStyStt,this._cThmSettings]}" .enabled="${this.enabled}" .icon="${this.icon}" .text="${this.text}" .animationType="${this.expandBoxType}" .theme="${this._cThm}" @mouseDown="${t=>this._oHdrClk(t)}"  @expandClicked="${t=>this._oHdrExp(t)}">\n                    ${this.allowAnimation&&this._isClk?html`\n                            <span class="iui-groupbox-header-animate-select-block" style=${styleMap({height:this._hdrSz.height+"px",width:this._clkPs.x+"px"})}>\n                                <span class=${classMap({"iui-groupbox-header-animate-select":this._isClk,"iui-groupbox-header-animate-select-left":this._isClk})} style=${styleMap({height:this._hdrSz.height+"px"})}></span>\n                            </span>\n                            <span class="iui-groupbox-header-animate-select-block" style=${styleMap({left:this._clkPs.x+"px",height:this._hdrSz.height+"px",width:this._hdrSz.width-this._clkPs.x+"px"})}>\n                                <span class=${classMap({"iui-groupbox-header-animate-select":this._isClk,"iui-groupbox-header-animate-select-right":this._isClk})} style=${styleMap({height:this._hdrSz.height+"px"})}></span>\n                            </span>`:html``}\n                </iui-header>\n				<div id="group-content" class=${classMap(this._gCntCs())} style=${styleMap({"border-width":this.expanded?"1px":"1px",display:this._cntDy,height:this._cntHt,opacity:this._cntOp})}>\n                    ${this._cDtaItems?this._cDtaItems.map((t,e)=>html`\n                                <iui-item .enabled="${t.enabled}" .icon="${t.icon}" .iconUrl="${t.iconUrl}" .text="${t.text}" .data="${t}" .customStyle="${this.customStyle}" .resourcePath="${this.resourcePath}" .theme="${this.theme}"></iui-item> \n                            `):html``}\n                </div>\n		    </div>\n        `}_uCtrStyStt(t){this._cCtrStyStt=css``;this._cCtrStyStt.cssText=this._cmnSrv.replaceAll(iuiListGroupDefaultStyle.cssText,"../icons",t)}_uItLt(){this._iLt=this._contentElem?this._contentElem.querySelectorAll("iui-item"):[];this._iLt.forEach(t=>{t.setParent(this)})}_uPrn(){if(!this._sprsCbk&&this._pCtr&&this._pCtr.updateLayout)this._pCtr.updateLayout()}_uRf(){this._contentElem=this.shadowRoot.querySelector("#group-content");this._eRf=this.shadowRoot.querySelector("div[data-ctrl=listgroup]");this._header=this.shadowRoot.querySelector("#group-header");let t=this;setTimeout(function(){t._uItLt()},10)}}window.customElements.define("iui-listgroup",IntegralUIListGroup);export default IntegralUIListGroup;