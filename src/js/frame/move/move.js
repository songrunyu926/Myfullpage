export default index => {
  const upNodes = document.querySelectorAll('#head .headMain nav .list li .down')
  const arrow = document.querySelector('#head .headMain>.arrow')
  const liNodes = document.querySelectorAll('#head .headMain>nav>.list>li')
  const pointNodes = document.querySelectorAll('#content .points li')
  const content = document.querySelector('#content')
  const cList = document.querySelector('#content .list')
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
 
}