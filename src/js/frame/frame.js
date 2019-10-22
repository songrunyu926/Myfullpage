import move from "./move/move"
import wheel from "./wheel/wheel"

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
        move(this.index)
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
         timer = setTimeout(() => wheel(event,content.index),30)
    })
  }
  content.onmousewheel = event => {
    clearTimeout(timer)
    timer = setTimeout(() => wheel(event,content.index),30)
  }
}