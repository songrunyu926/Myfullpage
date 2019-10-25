let interval = {
  timer1: 0,
  timer2: 0
}
export default {
  interval,
  qipaoFn: oc => {

    let context = oc.getContext('2d')
    let arr = []
  
    //从一个li到另一个li清除定时器
    clearInterval(interval.timer1)
    clearInterval(interval.timer2)

  
    interval.timer1 = setInterval(() => {
      console.log(1)
      let x = Math.round(Math.random() * oc.width)
      let y = oc.height - 20
      let radius = Math.round(5 + Math.random() * 5)
      let r = Math.round(Math.random() * 255)
      let g = Math.round(Math.random() * 255)
      let b = Math.round(Math.random() * 255)
      let a = 0.7
      let deg = 0
      let startX = x
      let startY = y
      let stepX = Math.round(10 + Math.random() * 30)
      let stepY = Math.round(10 + Math.random() * 10)
  
      arr.push({
        x,
        y,
        radius,
        r,
        g,
        b,
        a,
        deg,
        startX,
        startY,
        stepX,
        stepY
      })
    }, 100);
  
    interval.timer2 = setInterval(() => {
      console.log(2)
      context.clearRect(0, 0, oc.width, oc.height);
  
      arr.forEach((item,index) => {
        item.deg += 15
        //按照sin曲线去运动
        item.x = item.startX - (Math.sin(item.deg * Math.PI / 180)) * item.stepX
        item.y = item.startY - (item.deg * Math.PI / 180) * item.stepY
        if (item.y <= 20){
          arr.splice(index,1)
        }
      })
  
      arr.forEach(item => {
        context.save();
        context.beginPath();
        context.fillStyle = `rgba(${item.r},${item.g},${item.b},${item.a})`
        context.arc(item.x, item.y, item.radius, 0, Math.PI * 2);
        context.fill();
        context.restore();
      });
    }, 1000 / 60);
  
    
  }
}