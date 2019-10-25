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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__business_access_access__ = __webpack_require__(1);


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

  //开启入场动画
  if(__WEBPACK_IMPORTED_MODULE_0__business_access_access__["a" /* default */][index] && typeof __WEBPACK_IMPORTED_MODULE_0__business_access_access__["a" /* default */][index]['infn'] === 'function'){
    __WEBPACK_IMPORTED_MODULE_0__business_access_access__["a" /* default */][index]['infn']()
  }
  //开启出场动画
  if(__WEBPACK_IMPORTED_MODULE_0__business_access_access__["a" /* default */][content.preindex] && typeof __WEBPACK_IMPORTED_MODULE_0__business_access_access__["a" /* default */][content.preindex]['infn'] === 'function' && index !== content.preindex){
    __WEBPACK_IMPORTED_MODULE_0__business_access_access__["a" /* default */][content.preindex]['outfn']()
  }
 
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//出入场动画代码
/* harmony default export */ __webpack_exports__["a"] = ([
  {
    infn: () => {
      const home1 = document.querySelector('#content .list .home .home1')
      const home2 = document.querySelector('#content .list .home .home2')

      home1.style.transform = 'translateY(0)'
      home2.style.transform = 'translateY(0)'
      home1.style.opacity = '1'
      home2.style.opacity = '1'
    },
    outfn: () => {
      const home1 = document.querySelector('#content .list .home .home1')
      const home2 = document.querySelector('#content .list .home .home2')

      home1.style.transform = 'translateY(-400px)'
      home2.style.transform = 'translateY(100px)'
      home1.style.opacity = '0'
      home2.style.opacity = '0'
    }
  },
  {
    infn: () => {
      const plane1 = document.querySelector('#content .list .course > div .plane1')
      const plane2 = document.querySelector('#content .list .course > div .plane2')
      const plane3 = document.querySelector('#content .list .course > div .plane3')

      plane1.style.transform = 'translate(0,0)'
      plane2.style.transform = 'translate(0,0)'
      plane3.style.transform = 'translate(0,0)'
    },
    outfn: () => {
      const plane1 = document.querySelector('#content .list .course > div .plane1')
      const plane2 = document.querySelector('#content .list .course > div .plane2')
      const plane3 = document.querySelector('#content .list .course > div .plane3')

      plane1.style.transform = 'translate(-200px,-200px)'
      plane2.style.transform = 'translate(-200px,200px)'
      plane3.style.transform = 'translate(200px,-200px)'
    }
  },
  {
    infn: () => {
      const pencel1 = document.querySelector('#content .list .works > div .pancel1')
      const pencel2 = document.querySelector('#content .list .works > div .pancel2')
      const pencel3 = document.querySelector('#content .list .works > div .pancel3')

      pencel1.style.transform = 'translateY(0)'
      pencel2.style.transform = 'translateY(0)'
      pencel3.style.transform = 'translateY(0)'
    },
    outfn: () => {
      const pencel1 = document.querySelector('#content .list .works > div .pancel1')
      const pencel2 = document.querySelector('#content .list .works > div .pancel2')
      const pencel3 = document.querySelector('#content .list .works > div .pancel3')

      pencel1.style.transform = 'translateY(-100px)'
      pencel2.style.transform = 'translateY(100px)'
      pencel3.style.transform = 'translateY(100px)'
    }
  },
  {
    infn: () => {
      const rect1 = document.querySelector('#content .list .about > div .about3 .item:first-of-type')
      const rect2 = document.querySelector('#content .list .about > div .about3 .item:last-of-type')

      rect1.style.transform = 'rotate(0deg)'
      rect2.style.transform = 'rotate(0deg)'
    },
    outfn: () => {
      const rect1 = document.querySelector('#content .list .about > div .about3 .item:first-of-type')
      const rect2 = document.querySelector('#content .list .about > div .about3 .item:last-of-type')

      rect1.style.transform = 'rotate(45deg)'
      rect2.style.transform = 'rotate(-45deg)'
    }
  },
  {
    infn: () => {
      const rect1 = document.querySelector('#content .list .team > div .team1')
      const rect2 = document.querySelector('#content .list .team > div .team2')

      rect1.style.transform = 'translateX(0)'
      rect2.style.transform = 'translateX(0)'
    },
    outfn: () => {
      const rect1 = document.querySelector('#content .list .team > div .team1')
      const rect2 = document.querySelector('#content .list .team > div .team2')

      rect1.style.transform = 'translateX(-100px)'
      rect2.style.transform = 'translateX(100px)'
    }
  },
]);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__frame_frame__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__business_home__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__business_course__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__business_course___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__business_course__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__business_works__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__business_works___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__business_works__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__business_about__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__business_team__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__business_access_access__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__music_music__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__open_open__ = __webpack_require__(11);










Object(__WEBPACK_IMPORTED_MODULE_8__open_open__["a" /* default */])()
window.onload = () => {
  Object(__WEBPACK_IMPORTED_MODULE_0__frame_frame__["a" /* default */])()
  Object(__WEBPACK_IMPORTED_MODULE_1__business_home__["a" /* default */])()
  Object(__WEBPACK_IMPORTED_MODULE_5__business_team__["a" /* default */])()
  Object(__WEBPACK_IMPORTED_MODULE_4__business_about__["a" /* default */])()
  Object(__WEBPACK_IMPORTED_MODULE_7__music_music__["a" /* default */])()
  for (let i = 0; i < __WEBPACK_IMPORTED_MODULE_6__business_access_access__["a" /* default */].length; i++) {
    __WEBPACK_IMPORTED_MODULE_6__business_access_access__["a" /* default */][i]['outfn']()
  }
  setTimeout(() => __WEBPACK_IMPORTED_MODULE_6__business_access_access__["a" /* default */][0]['infn'](), 2000)
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__move_move__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wheel_wheel__ = __webpack_require__(4);



/* harmony default export */ __webpack_exports__["a"] = (() => {
  //获取元素
  const arrow = document.querySelector('#head .headMain>.arrow')
  const liNodes = document.querySelectorAll('#head .headMain>nav>.list>li')
  const firstLiNode = liNodes[0]
  const upNodes = document.querySelectorAll('#head .headMain nav .list>li .down')
  const firstupNode = upNodes[0]
  const content = document.querySelector('#content')
  const cLiNodes = document.querySelectorAll('#content .list>li')
  const pointNodes = document.querySelectorAll('#content .points>li')
  //初始化小尖角的位置和第一个nav的颜色  
  arrow.style.left = firstLiNode.offsetLeft + firstLiNode.offsetWidth / 2 - arrow.offsetWidth / 2 + 'px'
  firstupNode.style.width = '100%'
  content.preindex = 0
  //移动小尖角的位置  点击nav切换颜色 小圆点切换 
  if(liNodes.length === pointNodes.length){
    for (var i = 0; i < liNodes.length; i++) {
      liNodes[i].index = i
      pointNodes[i].index = i
      liNodes[i].onclick = pointNodes[i].onclick = function (){
        Object(__WEBPACK_IMPORTED_MODULE_0__move_move__["a" /* default */])(this.index)
        content.preindex = this.index
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
});

/***/ }),
/* 4 */
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

  content.preindex = index
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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
  //获取元素
  //内容li
  const homeliNodes = document.querySelectorAll('#content .home > div .home1 li')
  //小圆点li
  const homepoints = document.querySelectorAll('#content .home > div .home2 li')
  //鼠标移入停止
  const home1 = document.querySelector('#content .list .home .home1')

  let oldindex = 0
  let timer = 0
  let autoindex = 0

  //点击小圆点切换
  home()
  function home() {
    for (let i = 0; i < homepoints.length; i++) {
      homepoints[i].index = i
      homepoints[i].onclick = function () {
        clearInterval(timer)
        for (let i = 0; i < homepoints.length; i++) {
          homepoints[i].classList.remove('active')
        }
        homepoints[this.index].classList.add('active')
  
        //轮播图按照小点移动
        //从左到右
        if (oldindex > this.index) {
          homeliNodes[this.index].classList.remove('lefthide')
          homeliNodes[this.index].classList.remove('rightshow')
          homeliNodes[this.index].classList.remove('righthide')
          homeliNodes[this.index].classList.add('leftshow')
  
          homeliNodes[oldindex].classList.remove('lefthide')
          homeliNodes[oldindex].classList.remove('rightshow')
          homeliNodes[oldindex].classList.add('righthide')
          homeliNodes[oldindex].classList.remove('leftshow')
        }
        //从右到左
        if (oldindex < this.index) {
          homeliNodes[this.index].classList.remove('lefthide')
          homeliNodes[this.index].classList.add('rightshow')
          homeliNodes[this.index].classList.remove('righthide')
          homeliNodes[this.index].classList.remove('leftshow')
  
          homeliNodes[oldindex].classList.add('lefthide')
          homeliNodes[oldindex].classList.remove('rightshow')
          homeliNodes[oldindex].classList.remove('righthide')
          homeliNodes[oldindex].classList.remove('leftshow')
        }
  
        //赋值
        oldindex = this.index
        autoindex = this.index
        getauto()
      }
    }
  }


  function getauto() {
    //定时器
    clearInterval(timer)
  timer = setInterval(() => {
    autoindex++
    //限制范围
    if (autoindex == homeliNodes.length) {
      autoindex = 0
    }
    //移动轮播
    homeliNodes[autoindex].classList.remove('lefthide')
    homeliNodes[autoindex].classList.add('rightshow')
    homeliNodes[autoindex].classList.remove('righthide')
    homeliNodes[autoindex].classList.remove('leftshow')

    homeliNodes[oldindex].classList.add('lefthide')
    homeliNodes[oldindex].classList.remove('rightshow')
    homeliNodes[oldindex].classList.remove('righthide')
    homeliNodes[oldindex].classList.remove('leftshow')
    //小圆点移动
    for (let i = 0; i < homepoints.length; i++) {
      homepoints[i].classList.remove('active')
    }
    homepoints[autoindex].classList.add('active')

    //改变oldindex
    oldindex = autoindex
  }, 2500)
  } 
  setTimeout(getauto, 500);
  //移入关闭定时器 移出开启定时器
  home1.onmouseenter = () => clearInterval(timer)
  home1.onmouseleave = getauto

});

/***/ }),
/* 6 */
/***/ (function(module, exports) {



/***/ }),
/* 7 */
/***/ (function(module, exports) {



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (() => {
  const aboutUlNodes = document.querySelectorAll('#content .list .about > div .about3 .item ul')
  const items = document.querySelectorAll('#content .list .about > div .about3 .item')

  aboutUlNodes.forEach(ul => change(ul))

  function change(ul){
    let w = ul.offsetWidth / 2
    let h = ul.offsetHeight / 2
    for (let i = 0; i < 4; i++) {
        let liNode = document.createElement('li')
        let imgNode = document.createElement('img')
        imgNode.src = ul.dataset.src
        //分组算法技巧 
        imgNode.style.left = - (i % 2) * w + 'px'
        imgNode.style.top = - Math.floor(i / 2) * h + 'px'
        liNode.style.width = w + 'px'
        liNode.style.height = h + 'px'
        liNode.appendChild(imgNode)
        ul.appendChild(liNode)
    }

    items.forEach(item => {
      item.onmouseenter = function (){
        const imgNodes = this.querySelectorAll('ul > li> img')
        imgNodes[0].style.top = h + 'px'
        imgNodes[1].style.left = -2 * w + 'px'
        imgNodes[2].style.left = w + 'px'
        imgNodes[3].style.top = -2 * h + 'px'
      }
      item.onmouseleave = function (){
        const imgNodes = this.querySelectorAll('ul > li> img')
        imgNodes[0].style.top = 0 + 'px'
        imgNodes[1].style.left = -w + 'px'
        imgNodes[2].style.left = 0 + 'px'
        imgNodes[3].style.top = -h + 'px'
      }

    })
  }

  

  
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (() => {
  //获取元素
  const liNodes = document.querySelectorAll('#content .list .team > div .team3 li')
  liNodes.forEach((liNode,index) => {
    liNode.style.backgroundPosition = -index * 118 + 'px 0'
  })
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (() => {
  const musicDiv = document.querySelector('#head .headMain .music')
  const audio = document.querySelector('#head .headMain .music audio')

  musicDiv.addEventListener('click',function (){
    if(audio.paused){
      audio.play()
      musicDiv.style.background = "url('../../../static/img/musicon.gif')"
    }else{
      audio.pause()
      musicDiv.style.background = "url('../../../static/img/musicoff.gif')"
    }
  })
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//开机动画

/* harmony default export */ __webpack_exports__["a"] = (() => {
  const mask = document.querySelector('.mask')
  const line = document.querySelector('.mask .line')
  const curtains = document.querySelectorAll('.mask div')
  const audio = document.querySelector('#head .headMain .music audio')
  //需要加载完毕的图片
  var imgArr = ['bg1.jpg','bg2.jpg','bg3.jpg','bg4.jpg','bg5.jpg','about1.jpg','about2.jpg','about3.jpg','about4.jpg','worksimg1.jpg','worksimg2.jpg','worksimg3.jpg','worksimg4.jpg','team.png','greenLine.png']; 

  //完成加载的图片数
  let complate = 0

  for (let i = 0; i < imgArr.length; i++) {
    var img = new Image()
    img.src = '../../../static/img/' + imgArr[i]
    img.onload = () => {
      complate++
      console.log(complate)
      line.style.width = ((complate/imgArr.length) * 100)  + "%"
      console.log(((complate/imgArr.length) * 100)  + "%")
    }
  }

  line.addEventListener('transitionend',() => {
    if(complate == imgArr.length){
      curtains.forEach(curtain => curtain.style.height = 0 + 'px')
      line.style.display = 'none'
    }
  })

  //清除mask
  curtains[0].addEventListener('transitionend',() => {
    mask.remove()
    audio.play()
  })
});

/***/ })
/******/ ]);