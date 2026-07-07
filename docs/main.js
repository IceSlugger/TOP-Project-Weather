/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* 1. GLOBAL RESET: Forces all paddings/borders to stay INSIDE the boxes */\r\n*, *::before, *::after {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  min-height: 100vh;\r\n  overflow: hidden;\r\n  background-color: #1a1a1a;\r\n}\r\n\r\n/* Retro canvas background stretching */\r\n#weather-bg-canvas {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  z-index: -1;\r\n  image-rendering: pixelated;\r\n  image-rendering: crisp-edges;\r\n  transition: opacity 0.5s ease-in-out;\r\n}\r\n\r\n.weather-card {\r\n  background: rgba(255, 255, 255, 0.94);\r\n  backdrop-filter: blur(8px);\r\n  -webkit-backdrop-filter: blur(8px);\r\n  padding: 30px;\r\n  border-radius: 24px;\r\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);\r\n  width: 100%;\r\n  max-width: 380px;\r\n  animation: fadeIn 0.4s ease-out;\r\n  border: 3px solid #000000;\r\n}\r\n\r\n.search-container {\r\n  position: relative;\r\n  margin-bottom: 25px;\r\n  width: 100%;\r\n}\r\n\r\n/* 2. THE FIX: Perfectly squares the alignment row */\r\n#weather-form {\r\n  display: flex;\r\n  gap: 8px;\r\n  align-items: stretch; /* Forces input and button to be identical heights */\r\n  width: 100%;\r\n}\r\n\r\n#city-input {\r\n  flex: 1;\r\n  height: 44px; /* Explicit matching height */\r\n  padding: 0 14px;\r\n  font-size: 15px;\r\n  border: 2px solid #000000;\r\n  border-radius: 12px;\r\n  outline: none;\r\n  background: rgba(255, 255, 255, 0.9);\r\n  font-weight: 600;\r\n}\r\n\r\n#weather-form button {\r\n  height: 44px; /* Explicit matching height */\r\n  padding: 0 18px;\r\n  font-size: 15px;\r\n  background: #007bff;\r\n  color: white;\r\n  border: 2px solid #000000;\r\n  border-radius: 12px;\r\n  cursor: pointer;\r\n  font-weight: 700;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  transition: background 0.15s ease;\r\n}\r\n\r\n#weather-form button:hover {\r\n  background: #0056b3;\r\n}\r\n\r\n.suggestions-box {\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 0;\r\n  right: 0;\r\n  background: white;\r\n  border: 2px solid #000000;\r\n  border-radius: 12px;\r\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);\r\n  margin-top: 5px;\r\n  max-height: 220px;\r\n  overflow-y: auto;\r\n  z-index: 99;\r\n  display: none;\r\n}\r\n\r\n.suggestion-item {\r\n  padding: 12px 16px;\r\n  cursor: pointer;\r\n  font-size: 14px;\r\n  color: #333;\r\n  border-bottom: 1px solid #eee;\r\n  text-align: left;\r\n  font-weight: 600;\r\n}\r\n\r\n.suggestion-item:hover {\r\n  background: #f0f4f8;\r\n}\r\n\r\n.unit-toggle {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  gap: 5px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.toggle-btn {\r\n  background: #fff;\r\n  border: 2px solid #000000;\r\n  padding: 6px 12px;\r\n  border-radius: 8px;\r\n  cursor: pointer;\r\n  font-weight: bold;\r\n}\r\n\r\n.toggle-btn.active {\r\n  background: #007bff;\r\n  color: white;\r\n}\r\n\r\n#weather-display {\r\n  text-align: center;\r\n}\r\n\r\n.weather-icon {\r\n  font-size: 64px;\r\n  margin: 8px 0;\r\n}\r\n\r\n.temp-display {\r\n  font-size: 56px;\r\n  font-weight: 800;\r\n  margin: 0;\r\n  color: #000000;\r\n  line-height: 1.1;\r\n}\r\n\r\n.condition-text {\r\n  margin: 4px 0 15px 0;\r\n  color: #4b5563;\r\n  font-weight: 700;\r\n  font-size: 16px;\r\n}\r\n\r\n.details-grid {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 12px;\r\n  margin-top: 20px;\r\n  text-align: left;\r\n}\r\n\r\n.detail-item {\r\n  background: rgba(255, 255, 255, 0.9);\r\n  padding: 12px 14px;\r\n  border-radius: 14px;\r\n  border: 2px solid #000000;\r\n  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.detail-item span {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 4px;\r\n  font-size: 11px;\r\n  color: #4b5563;\r\n  text-transform: uppercase;\r\n  font-weight: 800;\r\n  margin-bottom: 4px;\r\n}\r\n\r\n.detail-item strong {\r\n  font-size: 15px;\r\n  color: #000000;\r\n  font-weight: 700;\r\n}\r\n\r\n.spinner {\r\n  width: 40px;\r\n  height: 40px;\r\n  border: 4px solid rgba(0, 0, 0, 0.1);\r\n  border-top: 4px solid #007bff;\r\n  border-radius: 50%;\r\n  animation: spin 1s linear infinite;\r\n  margin: 40px auto;\r\n}\r\n\r\n@keyframes spin {\r\n  0% { transform: rotate(0deg); }\r\n  100% { transform: rotate(360deg); }\r\n}\r\n\r\n@keyframes fadeIn {\r\n  from { opacity: 0; transform: translateY(12px); }\r\n  to { opacity: 1; transform: translateY(0); }\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://top-project-weather/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://top-project-weather/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://top-project-weather/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://top-project-weather/./src/style.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://top-project-weather/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://top-project-weather/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://top-project-weather/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://top-project-weather/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://top-project-weather/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://top-project-weather/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\nconst API_KEY = 'FNLGYPVSPYP6VJQU8JDCX2YEC'; \r\n\r\nlet currentWeatherData = null;\r\nlet currentUnit = 'F';\r\n\r\n// 1. Create the Pixel-Art Canvas (Fixed Retro Resolution: 320x180)\r\nconst canvas = document.createElement('canvas');\r\ncanvas.id = 'weather-bg-canvas';\r\ncanvas.width = 320;\r\ncanvas.height = 180;\r\ndocument.body.appendChild(canvas);\r\nconst ctx = canvas.getContext('2d');\r\n\r\n// 2. Build UI Card Layout\r\nconst card = document.createElement('div');\r\ncard.className = 'weather-card';\r\ncard.innerHTML = `\r\n  <div class=\"unit-toggle\">\r\n    <button id=\"toggle-f\" class=\"toggle-btn active\">°F</button>\r\n    <button id=\"toggle-c\" class=\"toggle-btn\">°C</button>\r\n  </div>\r\n  <div class=\"search-container\">\r\n    <form id=\"weather-form\">\r\n      <input type=\"text\" id=\"city-input\" placeholder=\"Enter city name...\" required autocomplete=\"off\">\r\n      <button type=\"submit\">Search</button>\r\n    </form>\r\n    <div id=\"suggestions-box\" class=\"suggestions-box\"></div>\r\n  </div>\r\n  <div id=\"loading-spinner\" class=\"spinner\" style=\"display: none;\"></div>\r\n  <div id=\"weather-display\" style=\"display: none;\"></div>\r\n`;\r\ndocument.body.appendChild(card);\r\n\r\nconst displayDiv = document.getElementById('weather-display');\r\nconst spinner = document.getElementById('loading-spinner');\r\nconst cityInput = document.getElementById('city-input');\r\nconst suggestionsBox = document.getElementById('suggestions-box');\r\n\r\n// Asset and UI Theme Mappings\r\nconst weatherAssets = {\r\n  'clear-day': { icon: '☀️', type: 'clear' },\r\n  'clear-night': { icon: '🌙', type: 'clear-night' },\r\n  'rain': { icon: '🌧️', type: 'rain' },\r\n  'showers-day': { icon: '🌦️', type: 'rain' },\r\n  'showers-night': { icon: '🌦️', type: 'rain' },\r\n  'thunderstorm': { icon: '⛈️', type: 'rain' },\r\n  'snow': { icon: '❄️', type: 'snow' },\r\n  'wind': { icon: '💨', type: 'cloudy' },\r\n  'fog': { icon: '🌫️', type: 'cloudy' },\r\n  'cloudy': { icon: '☁️', type: 'cloudy' },\r\n  'partly-cloudy-day': { icon: '⛅', type: 'cloudy' },\r\n  'partly-cloudy-night': { icon: '☁️', type: 'cloudy' },\r\n  'default': { icon: '🌍', type: 'clear' }\r\n};\r\n\r\n// 3. Engine States for Pixel-Art Background Animations\r\nlet animationId = null;\r\nlet particles = [];\r\nlet clouds = [];\r\nlet sunCycle = 0;\r\n\r\nfunction startPixelAnimation(weatherType) {\r\n  if (animationId) cancelAnimationFrame(animationId);\r\n  particles = [];\r\n  clouds = [];\r\n\r\n  // Spawn retro rain streaks\r\n  if (weatherType === 'rain') {\r\n    for (let i = 0; i < 50; i++) {\r\n      particles.push({ x: Math.random() * 320, y: Math.random() * 180, speed: 4 + Math.random() * 3, len: 4 + Math.random() * 4 });\r\n    }\r\n  }\r\n  // Spawn retro drifting snow blocks\r\n  if (weatherType === 'snow') {\r\n    for (let i = 0; i < 35; i++) {\r\n      particles.push({ x: Math.random() * 320, y: Math.random() * 180, speed: 0.4 + Math.random() * 0.5, size: 1.5 + Math.random() * 1.5, drift: Math.random() * 10 });\r\n    }\r\n  }\r\n  // Spawn shifting, blocky horizontal clouds\r\n  if (weatherType === 'cloudy' || weatherType === 'rain') {\r\n    clouds = [\r\n      { x: 10, y: 15, w: 60, h: 14, speed: 0.04 },\r\n      { x: 120, y: 35, w: 80, h: 18, speed: 0.02 },\r\n      { x: 240, y: 20, w: 55, h: 12, speed: 0.06 }\r\n    ];\r\n  }\r\n\r\n  function loop() {\r\n    ctx.clearRect(0, 0, 320, 180);\r\n\r\n    // Render Retro Base Environment Palettes\r\n    if (weatherType === 'clear') {\r\n      ctx.fillStyle = '#4facfe'; // 8-bit sky blue\r\n      ctx.fillRect(0, 0, 320, 180);\r\n      \r\n      // Draw Chunky Pixel Art Sun Core\r\n      sunCycle += 0.02;\r\n      ctx.fillStyle = '#ffdf00';\r\n      ctx.fillRect(40, 35, 20, 20);\r\n      ctx.fillRect(44, 31, 12, 28);\r\n      ctx.fillRect(36, 39, 28, 12);\r\n      \r\n      // Flashing pixel sunbeams\r\n      ctx.fillStyle = 'rgba(255, 223, 0, 0.4)';\r\n      let pulse = Math.floor(Math.sin(sunCycle) * 3);\r\n      ctx.fillRect(26 - pulse, 43, 6 + pulse, 4);\r\n      ctx.fillRect(68, 43, 6 + pulse, 4);\r\n      ctx.fillRect(48, 21 - pulse, 4, 6 + pulse);\r\n      ctx.fillRect(48, 59, 4, 6 + pulse);\r\n\r\n    } else if (weatherType === 'clear-night') {\r\n      ctx.fillStyle = '#0b132b'; // Deep space midnight\r\n      ctx.fillRect(0, 0, 320, 180);\r\n      \r\n      // Static background twinkling pixel stars\r\n      ctx.fillStyle = '#ffffff';\r\n      ctx.fillRect(30, 25, 1, 1);\r\n      ctx.fillRect(140, 50, 2, 2);\r\n      ctx.fillRect(280, 15, 1, 1);\r\n      ctx.fillRect(210, 80, 2, 1);\r\n\r\n    } else if (weatherType === 'rain') {\r\n      ctx.fillStyle = '#2c3e50'; // Dark storm clouds slate\r\n      ctx.fillRect(0, 0, 320, 180);\r\n\r\n    } else if (weatherType === 'snow') {\r\n      ctx.fillStyle = '#7f8c8d'; // Soft winter gray\r\n      ctx.fillRect(0, 0, 320, 180);\r\n\r\n    } else {\r\n      ctx.fillStyle = '#5d6d7e'; // Standard overcast overcast gray\r\n      ctx.fillRect(0, 0, 320, 180);\r\n    }\r\n\r\n    // Draw and Update Pixel Clouds\r\n    ctx.fillStyle = weatherType === 'rain' ? '#34495e' : '#ffffff';\r\n    clouds.forEach(c => {\r\n      c.x += c.speed;\r\n      if (c.x > 320) c.x = -c.w;\r\n      \r\n      // Draw compound blocky shapes mimicking true pixel art clouds\r\n      ctx.fillRect(Math.floor(c.x), Math.floor(c.y), c.w, c.h);\r\n      ctx.fillRect(Math.floor(c.x + c.w * 0.15), Math.floor(c.y - c.h * 0.3), c.w * 0.7, c.h * 1.3);\r\n      ctx.fillRect(Math.floor(c.x + c.w * 0.3), Math.floor(c.y - c.h * 0.5), c.w * 0.4, c.h * 1.5);\r\n    });\r\n\r\n    // Animate Weather Particles\r\n    if (weatherType === 'rain') {\r\n      ctx.fillStyle = '#a1c4fd';\r\n      particles.forEach(p => {\r\n        p.y += p.speed;\r\n        if (p.y > 180) { p.y = -p.len; p.x = Math.random() * 320; }\r\n        ctx.fillRect(Math.floor(p.x), Math.floor(p.y), 1, Math.floor(p.len)); // 1-pixel wide lines\r\n      });\r\n    } else if (weatherType === 'snow') {\r\n      ctx.fillStyle = '#ffffff';\r\n      particles.forEach(p => {\r\n        p.y += p.speed;\r\n        p.drift += 0.04;\r\n        p.x += Math.sin(p.drift) * 0.2;\r\n        if (p.y > 180) { p.y = -5; p.x = Math.random() * 320; }\r\n        let sz = Math.floor(p.size);\r\n        ctx.fillRect(Math.floor(p.x), Math.floor(p.y), sz, sz); // Squares for snowflakes\r\n      });\r\n    }\r\n\r\n    animationId = requestAnimationFrame(loop);\r\n  }\r\n  loop();\r\n}\r\n\r\n// 4. Real-time Location Autocomplete Dropdown\r\nlet debounceTimeout;\r\ncityInput.addEventListener('input', () => {\r\n  clearTimeout(debounceTimeout);\r\n  const query = cityInput.value.trim();\r\n\r\n  if (query.length < 3) {\r\n    suggestionsBox.style.display = 'none';\r\n    return;\r\n  }\r\n\r\n  debounceTimeout = setTimeout(async () => {\r\n    try {\r\n      const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=5&language=en`);\r\n      const data = await response.json();\r\n\r\n      if (data.results && data.results.length > 0) {\r\n        suggestionsBox.innerHTML = data.results\r\n          .map(city => {\r\n            const region = city.admin1 ? `, ${city.admin1}` : '';\r\n            return `<div class=\"suggestion-item\" data-name=\"${city.name}, ${city.country}\">${city.name}${region}, ${city.country}</div>`;\r\n          })\r\n          .join('');\r\n        suggestionsBox.style.display = 'block';\r\n      } else {\r\n        suggestionsBox.style.display = 'none';\r\n      }\r\n    } catch (err) {\r\n      console.error(err);\r\n    }\r\n  }, 300);\r\n});\r\n\r\nsuggestionsBox.addEventListener('click', (e) => {\r\n  if (e.target.classList.contains('suggestion-item')) {\r\n    const targetCity = e.target.getAttribute('data-name');\r\n    cityInput.value = targetCity;\r\n    suggestionsBox.style.display = 'none';\r\n    getWeatherData(targetCity);\r\n  }\r\n});\r\n\r\ndocument.addEventListener('click', (e) => {\r\n  if (e.target !== cityInput && e.target !== suggestionsBox) {\r\n    suggestionsBox.style.display = 'none';\r\n  }\r\n});\r\n\r\n// 5. Data Structures\r\nfunction processWeatherData(rawData) {\r\n  return {\r\n    location: rawData.address,\r\n    tempF: rawData.currentConditions.temp,\r\n    feelsLikeF: rawData.currentConditions.feelslike,\r\n    condition: rawData.currentConditions.conditions,\r\n    iconCode: rawData.currentConditions.icon,\r\n    humidity: rawData.currentConditions.humidity,\r\n    windSpeed: rawData.currentConditions.windspeed\r\n  };\r\n}\r\n\r\nconst convertToCelsius = (f) => Math.round(((f - 32) * 5) / 9);\r\n\r\nfunction displayWeather() {\r\n  if (!currentWeatherData) return;\r\n\r\n  displayDiv.style.display = 'block';\r\n  \r\n  // Hand off the custom condition code to trigger the canvas renderer background\r\n  const theme = weatherAssets[currentWeatherData.iconCode] || weatherAssets['default'];\r\n  startPixelAnimation(theme.type);\r\n\r\n  const displayTemp = currentUnit === 'F' \r\n    ? `${Math.round(currentWeatherData.tempF)}°F` \r\n    : `${convertToCelsius(currentWeatherData.tempF)}°C`;\r\n\r\n  const displayFeels = currentUnit === 'F' \r\n    ? `${Math.round(currentWeatherData.feelsLikeF)}°F` \r\n    : `${convertToCelsius(currentWeatherData.feelsLikeF)}°C`;\r\n\r\n  displayDiv.innerHTML = `\r\n    <h2 style=\"margin: 0; font-size: 22px; color: #1c1e21; text-transform: capitalize;\">${currentWeatherData.location}</h2>\r\n    <div class=\"weather-icon\">${theme.icon}</div>\r\n    <h1 class=\"temp-display\">${displayTemp}</h1>\r\n    <p class=\"condition-text\">${currentWeatherData.condition}</p>\r\n    \r\n    <div class=\"details-grid\">\r\n      <div class=\"detail-item\">\r\n        <span>Feels Like 🌡️</span>\r\n        <strong>${displayFeels}</strong>\r\n      </div>\r\n      <div class=\"detail-item\">\r\n        <span>Humidity 💧</span>\r\n        <strong>${currentWeatherData.humidity}%</strong>\r\n      </div>\r\n      <div class=\"detail-item\">\r\n        <span>Wind Speed 💨</span>\r\n        <strong>${currentWeatherData.windSpeed} mph</strong>\r\n      </div>\r\n      <div class=\"detail-item\">\r\n        <span>Status Code 🏷️</span>\r\n        <strong style=\"text-transform: uppercase; font-size: 11px; color:#007bff;\">${currentWeatherData.iconCode}</strong>\r\n      </div>\r\n    </div>\r\n  `;\r\n}\r\n\r\nasync function getWeatherData(location) {\r\n  spinner.style.display = 'block';\r\n  displayDiv.style.display = 'none';\r\n\r\n  try {\r\n    const response = await fetch(\r\n      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}?key=${API_KEY}`,\r\n      { mode: 'cors' }\r\n    );\r\n\r\n    if (!response.ok) throw new Error(`Location not found`);\r\n\r\n    const rawData = await response.json();\r\n    currentWeatherData = processWeatherData(rawData);\r\n    displayWeather();\r\n    \r\n  } catch (error) {\r\n    displayDiv.style.display = 'block';\r\n    displayDiv.innerHTML = `<p style=\"color: #dc3545; margin: 25px 0; font-weight: 600;\">⚠️ ${error.message}</p>`;\r\n  } finally {\r\n    spinner.style.display = 'none';\r\n  }\r\n}\r\n\r\ndocument.getElementById('weather-form').addEventListener('submit', (e) => {\r\n  e.preventDefault();\r\n  const city = cityInput.value.trim();\r\n  if (city) {\r\n    suggestionsBox.style.display = 'none';\r\n    getWeatherData(city);\r\n  }\r\n});\r\n\r\nconst btnF = document.getElementById('toggle-f');\r\nconst btnC = document.getElementById('toggle-c');\r\n\r\nbtnF.addEventListener('click', () => {\r\n  if (currentUnit === 'F') return;\r\n  currentUnit = 'F';\r\n  btnF.classList.add('active');\r\n  btnC.classList.remove('active');\r\n  displayWeather();\r\n});\r\n\r\nbtnC.addEventListener('click', () => {\r\n  if (currentUnit === 'C') return;\r\n  currentUnit = 'C';\r\n  btnC.classList.add('active');\r\n  btnF.classList.remove('active');\r\n  displayWeather();\r\n});\r\n\r\n// Load Default\r\ngetWeatherData('London');\n\n//# sourceURL=webpack://top-project-weather/./src/index.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			const getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;