export default () => {
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
}