export default () => {
  //获取元素
  const liNodes = document.querySelectorAll('#content .list .team > div .team3 li')
  liNodes.forEach((liNode,index) => {
    liNode.style.backgroundPosition = -index * 118 + 'px 0'
  })
}