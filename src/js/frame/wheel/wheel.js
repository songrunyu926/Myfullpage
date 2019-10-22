import move from "../move/move"

export default (e,index) => {
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


  switch(direction){
    case 'up':
      index > 0 ? index-- : 0
      move(index) 
      break
    case 'down':
      console.log(direction)
      index < (length - 1) ? index++ : (length - 1)
      move(index)
      break
  }
  content.index = index
  console.log(index)
}