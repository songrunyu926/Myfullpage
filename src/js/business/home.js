export default function () {
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
  getauto()
  //移入关闭定时器 移出开启定时器
  home1.onmouseenter = () => clearInterval(timer)
  home1.onmouseleave = getauto

}