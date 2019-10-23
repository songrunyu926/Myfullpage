/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (index => {
  const upNodes = document.querySelectorAll('#head .headMain nav .list li .down')
  const arrow = document.querySelector('#head .headMain>.arrow')
  const liNodes = document.querySelectorAll('#head .headMain>nav>.list>li')
  const pointNodes = document.querySelectorAll('#content .points li')
  const content = document.querySelector('#content')
  const cList = document.querySelector('#content .list')

  //在每次点击导航和小圆点时 同步index
  content.index = index
  //切换按钮样式 和 小圆点样式
  for (let j = 0; j < upNodes.length; j++) {
    upNodes[j].style.width = ""
    pointNodes[j].classList.remove('active')
  }
  upNodes[index].style.width = "100%"
  pointNodes[index].classList.add('active')
  //同步小箭头
  arrow.style.left = liNodes[index].offsetLeft + liNodes[index].offsetWidth / 2 - arrow.offsetWidth / 2 + 'px'

  //竖向滑动
  cList.style.top = - index * content.offsetHeight + 'px';
 
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__frame_frame__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__business_home__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__business_home___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__business_home__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__business_course__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__business_course___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__business_course__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__business_works__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__business_works___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__business_works__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__business_about__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__business_about___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__business_about__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__business_team__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__business_team___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__business_team__);







//处理用户缩放事件
 window.onresize = () => {
  const arrow = document.querySelector('#head .headMain>.arrow')
  const liNodes = document.querySelectorAll('#head .headMain>nav>.list>li')
  const firstLiNode = liNodes[0]
  const upNodes = document.querySelectorAll('#head .headMain nav .list li .down')
  const firstupNode = upNodes[0]
  const content = document.querySelector('#content')
  const cLiNodes = document.querySelectorAll('#content .list > li')
  const pointNodes = document.querySelectorAll('#content .points li')

  //计算高度
  cLiNodes.forEach(liNode => liNode.style.height = content.offsetHeight + 'px')
  //初始化小尖角的位置和第一个nav的颜色  
  arrow.style.left = firstLiNode.offsetLeft + firstLiNode.offsetWidth / 2 - arrow.offsetWidth / 2 + 'px'
 }

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__move_move__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wheel_wheel__ = __webpack_require__(3);



window.onload = () => {
  //获取元素
  const arrow = document.querySelector('#head .headMain>.arrow')
  const liNodes = document.querySelectorAll('#head .headMain>nav>.list>li')
  const firstLiNode = liNodes[0]
  const upNodes = document.querySelectorAll('#head .headMain nav .list li .down')
  const firstupNode = upNodes[0]
  const content = document.querySelector('#content')
  const cLiNodes = document.querySelectorAll('#content .list > li')
  const pointNodes = document.querySelectorAll('#content .points li')
  //初始化小尖角的位置和第一个nav的颜色  
  arrow.style.left = firstLiNode.offsetLeft + firstLiNode.offsetWidth / 2 - arrow.offsetWidth / 2 + 'px'
  firstupNode.style.width = '100%'
  //移动小尖角的位置  点击nav切换颜色 小圆点切换 
  if(liNodes.length === pointNodes.length){
    for (var i = 0; i < liNodes.length; i++) {
      liNodes[i].index = i
      pointNodes[i].index = i
      liNodes[i].onclick = pointNodes[i].onclick = function (){
        Object(__WEBPACK_IMPORTED_MODULE_0__move_move__["a" /* default */])(this.index)
      }
    }
  }
  
  //内容去逻辑
  cLiNodes.forEach(liNode => liNode.style.height = content.offsetHeight + 'px')


  //滚轮事件
  content.index = 0
  let timer = 0
  if(content.addEventListener){
    content.addEventListener('DOMMouseScroll',event => {
         clearTimeout(timer)
         timer = setTimeout(() => Object(__WEBPACK_IMPORTED_MODULE_1__wheel_wheel__["a" /* default */])(event,content.index),30)
    })
  }
  content.onmousewheel = event => {
    clearTimeout(timer)
    timer = setTimeout(() => Object(__WEBPACK_IMPORTED_MODULE_1__wheel_wheel__["a" /* default */])(event,content.index),30)
  }
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__move_move__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = ((e,index) => {
  e = e || event
  const pointNodes = document.querySelectorAll('#content .points li')
  let length = pointNodes.length
  const content = document.querySelector('#content')
  let direction = ''

  if(e.wheelDelta && e.wheelDelta > 0){
    direction = 'up'
  }else if(e.wheelDelta && e.wheelDelta < 0){
    direction = 'down'
  }

  if(e.detail && e.detail > 0){
    direction = 'down'
  }else if(e.detail && e.detail < 0){
    direction = 'up'
  }


  switch(direction){
    case 'up':
      index > 0 ? index-- : 0
      Object(__WEBPACK_IMPORTED_MODULE_0__move_move__["a" /* default */])(index) 
      break
    case 'down':
      index < (length - 1) ? index++ : (length - 1)
      Object(__WEBPACK_IMPORTED_MODULE_0__move_move__["a" /* default */])(index)
      break
  }
  content.index = index
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {



/***/ }),
/* 5 */
/***/ (function(module, exports) {



/***/ }),
/* 6 */
/***/ (function(module, exports) {



/***/ }),
/* 7 */
/***/ (function(module, exports) {



/***/ }),
/* 8 */
/***/ (function(module, exports) {



/***/ })
/******/ ]);