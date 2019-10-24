//开机动画

export default () => {
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
}