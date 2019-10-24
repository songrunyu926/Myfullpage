export default () => {
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

  

  
}