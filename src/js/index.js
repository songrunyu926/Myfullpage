import "./frame/frame"
import "./business/home"
import "./business/course"
import "./business/works"
import "./business/about"
import "./business/team"

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