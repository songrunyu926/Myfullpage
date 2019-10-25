import qipaoobj from "./qipao/qipao"

export default () => {
  //获取元素
  const liNodes = document.querySelectorAll('#content .list .team > div .team3 li')
  const team3 = document.querySelector('#content .list .team > div .team3')

  liNodes.forEach((liNode,index) => {
    liNode.style.backgroundPosition = -index * 118 + 'px 0'
  })

  const qipao = document.querySelector('#qipao')
  qipao.width = liNodes[0].offsetWidth
  qipao.height = liNodes[0].offsetHeight

  liNodes.forEach(liNode => {
    liNode.onmouseenter = function (){
      liNodes.forEach(liNode => {
        liNode.style.opacity = '.5'
      })
      this.style.opacity = '1'

      qipao.style.left = this.offsetLeft + 'px'
      qipao.style.top = this.offsetTop + 20 + 'px'
      qipao.style.display = 'block'

      qipaoobj.qipaoFn(qipao)
    }
  })

  team3.onmouseleave = function (){
    liNodes.forEach(liNode => {
      liNode.style.opacity = '1'
    })

    qipao.style.display = 'none'

    clearInterval(qipaoobj.interval.timer1)
    clearInterval(qipaoobj.interval.timer2)

  }
}