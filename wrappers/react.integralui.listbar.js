/*
  filename: react.integralui.listbar.js
  version : 20.2.0
  Copyright © 2020 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web Lite" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web Lite License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/lite/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var s=t[r];s.enumerable=s.enumerable||!1;s.configurable=!0;if("value"in s)s.writable=!0;Object.defineProperty(e,s.key,s)}}return function(t,r,s){if(r)e(t.prototype,r);if(s)e(t,s);return t}}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"===typeof t||"function"===typeof t)?t:e}function _inherits(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}import React,{Component}from"react";import"../components/integralui.listbar.js";var IntegralUIListBarComponent=function(e){_inherits(t,Component);function t(e){_classCallCheck(this,t);var r=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));r.ctrlRef=React.createRef();return r}_createClass(t,[{key:"_isCtrlDefined",value:function(){return this.ctrlRef&&this.ctrlRef.current?!0:!1}},{key:"componentDidMount",value:function(){var e=this;this._initProps();if(this._isCtrlDefined()){if(this.props.afterCollapse)this.ctrlRef.current.addEventListener("afterCollapse",function(t){return e.props.afterCollapse(t)});if(this.props.afterExpand)this.ctrlRef.current.addEventListener("afterExpand",function(t){return e.props.afterExpand(t)});if(this.props.afterSelect)this.ctrlRef.current.addEventListener("afterSelect",function(t){return e.props.afterSelect(t)});if(this.props.beforeCollapse)this.ctrlRef.current.addEventListener("beforeCollapse",function(t){return e.props.beforeCollapse(t)});if(this.props.beforeExpand)this.ctrlRef.current.addEventListener("beforeExpand",function(t){return e.props.beforeExpand(t)});if(this.props.beforeSelect)this.ctrlRef.current.addEventListener("beforeSelect",function(t){return e.props.beforeSelect(t)});if(this.props.clear)this.ctrlRef.current.addEventListener("clear",function(){return e.props.clear()});if(this.props.enabledChanged)this.ctrlRef.current.addEventListener("enabledChanged",function(t){return e.props.enabledChanged(t)});if(this.props.groupAdded)this.ctrlRef.current.addEventListener("groupAdded",function(t){return e.props.groupAdded(t)});if(this.props.groupAdding)this.ctrlRef.current.addEventListener("groupAdding",function(t){return e.props.groupAdding(t)});if(this.props.groupRemoved)this.ctrlRef.current.addEventListener("groupRemoved",function(t){return e.props.groupRemoved(t)});if(this.props.groupRemoving)this.ctrlRef.current.addEventListener("groupRemoving",function(t){return e.props.groupRemoving(t)});if(this.props.selectionChanged)this.ctrlRef.current.addEventListener("selectionChanged",function(t){return e.props.selectionChanged(t)});if(this.props.sizeChanged)this.ctrlRef.current.addEventListener("sizeChanged",function(t){return e.props.sizeChanged(t)});if(this.props.stateChanged)this.ctrlRef.current.addEventListener("stateChanged",function(t){return e.props.stateChanged(t)})}}},{key:"componentWillUnmount",value:function(){if(this._isCtrlDefined()){if(this.props.afterCollapse)this.ctrlRef.current.removeEventListener("afterCollapse",this.props.afterCollapse);if(this.props.afterExpand)this.ctrlRef.current.removeEventListener("afterExpand",this.props.afterExpand);if(this.props.afterSelect)this.ctrlRef.current.removeEventListener("afterSelect",this.props.afterSelect);if(this.props.beforeCollapse)this.ctrlRef.current.removeEventListener("beforeCollapse",this.props.beforeCollapse);if(this.props.beforeExpand)this.ctrlRef.current.removeEventListener("beforeExpand",this.props.beforeExpand);if(this.props.beforeSelect)this.ctrlRef.current.removeEventListener("beforeSelect",this.props.beforeSelect);if(this.props.clear)this.ctrlRef.current.removeEventListener("clear",this.props.clear);if(this.props.enabledChanged)this.ctrlRef.current.removeEventListener("enabledChanged",this.props.enabledChanged);if(this.props.groupAdded)this.ctrlRef.current.removeEventListener("groupAdded",this.props.groupAdded);if(this.props.groupAdding)this.ctrlRef.current.removeEventListener("groupAdding",this.props.groupAdding);if(this.props.groupRemoved)this.ctrlRef.current.removeEventListener("groupRemoved",this.props.groupRemoved);if(this.props.groupRemoving)this.ctrlRef.current.removeEventListener("groupRemoving",this.props.groupRemoving);if(this.props.selectionChanged)this.ctrlRef.current.removeEventListener("selectionChanged",this.props.selectionChanged);if(this.props.sizeChanged)this.ctrlRef.current.removeEventListener("sizeChanged",this.props.sizeChanged);if(this.props.stateChanged)this.ctrlRef.current.removeEventListener("stateChanged",this.props.stateChanged)}}},{key:"componentDidUpdate",value:function(e){this._updateData(e)}},{key:"_initProps",value:function(){if(this._isCtrlDefined()){if(this._isDefined(this.props.allowAnimation))this.ctrlRef.current.allowAnimation=this.props.allowAnimation;if(this._isDefined(this.props.controlStyle))this.ctrlRef.current.controlStyle=this.props.controlStyle;if(this._isDefined(this.props.customStyle))this.ctrlRef.current.customStyle=this.props.customStyle;if(this._isDefined(this.props.data))this.ctrlRef.current.data=this.props.data;if(this._isDefined(this.props.enabled))this.ctrlRef.current.enabled=this.props.enabled;if(this._isDefined(this.props.groups))this.ctrlRef.current.groups=this.props.groups;if(this._isDefined(this.props.mouseWheelSpeed))this.ctrlRef.current.mouseWheelSpeed=this.props.mouseWheelSpeed;if(this._isDefined(this.props.name))this.ctrlRef.current.name=this.props.name;if(this._isDefined(this.props.resourcePath))this.ctrlRef.current.resourcePath=this.props.resourcePath;if(this._isDefined(this.props.selectedGroup))this.ctrlRef.current.selectedGroup=this.props.selectedGroup;if(this._isDefined(this.props.selectedIndex))this.ctrlRef.current.selectedIndex=this.props.selectedIndex;if(this._isDefined(this.props.size))this.ctrlRef.current.size=this.props.size;if(this._isDefined(this.props.state))this.ctrlRef.current.state=this.props.state;if(this._isDefined(this.props.theme))this.ctrlRef.current.theme=this.props.theme}}},{key:"_isDefined",value:function(e){return void 0!==e?!0:!1}},{key:"_updateData",value:function(e){if(this._isCtrlDefined()){if(this.props.allowAnimation!==e.allowAnimation)this.ctrlRef.current.allowAnimation=this.props.allowAnimation;if(this.props.controlStyle!==e.controlStyle)this.ctrlRef.current.controlStyle=this.props.controlStyle;if(this.props.customStyle!==e.customStyle)this.ctrlRef.current.customStyle=this.props.customStyle;if(this.props.data!==e.data)this.ctrlRef.current.data=this.props.data;if(this.props.enabled!==e.enabled)this.ctrlRef.current.enabled=this.props.enabled;if(this._isDefined(this.props.groups))this.ctrlRef.current.groups=this.props.groups;if(this.props.mouseWheelSpeed!==e.mouseWheelSpeed)this.ctrlRef.current.mouseWheelSpeed=this.props.mouseWheelSpeed;if(this.props.name!==e.name)this.ctrlRef.current.name=this.props.name;if(this.props.resourcePath!==e.resourcePath)this.ctrlRef.current.resourcePath=this.props.resourcePath;if(this.props.selectedGroup!==e.selectedGroup)this.ctrlRef.current.selectedGroup=this.props.selectedGroup;if(this.props.selectedIndex!==e.selectedIndex)this.ctrlRef.current.selectedIndex=this.props.selectedIndex;if(this.props.size!==e.size)this.ctrlRef.current.size=this.props.size;if(this.props.state!==e.state)this.ctrlRef.current.state=this.props.state;if(this.props.theme!==e.theme)this.ctrlRef.current.theme=this.props.theme}}},{key:"addGroup",value:function(e){if(this._isCtrlDefined())this.ctrlRef.current.addGroup(e)}},{key:"clearGroups",value:function(){if(this._isCtrlDefined())this.ctrlRef.current.clearGroups()}},{key:"insertGroupAt",value:function(e,t){if(this._isCtrlDefined())this.ctrlRef.current.insertGroupAt(e,t)}},{key:"insertGroupBefore",value:function(e,t){if(this._isCtrlDefined())this.ctrlRef.current.insertGroupBefore(e,t)}},{key:"insertGroupAfter",value:function(e,t){if(this._isCtrlDefined())this.ctrlRef.current.insertGroupAfter(e,t)}},{key:"removeGroup",value:function(e){return this._isCtrlDefined()?this.ctrlRef.current.removeGroup(e):!1}},{key:"removeGroupAt",value:function(e){return this._isCtrlDefined()?this.ctrlRef.current.removeGroupAt(e):!1}},{key:"scrollPos",value:function(e){if(this._isCtrlDefined())this.ctrlRef.current.scrollPos(e)}},{key:"selectGroup",value:function(e){if(this._isCtrlDefined())this.ctrlRef.current.selectGroup(e)}},{key:"refresh",value:function(){if(this._isCtrlDefined())this.ctrlRef.current.refresh()}},{key:"updateLayout",value:function(){if(this._isCtrlDefined())this.ctrlRef.current.updateLayout()}},{key:"render",value:function(){return React.createElement("iui-listbar",{id:this.props.id,ref:this.ctrlRef},this.props.children)}}]);return t}();export default IntegralUIListBarComponent;