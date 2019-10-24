//出入场动画代码
export default [
  {
    infn: () => {
      const home1 = document.querySelector('#content .list .home .home1')
      const home2 = document.querySelector('#content .list .home .home2')

      home1.style.transform = 'translateY(0)'
      home2.style.transform = 'translateY(0)'
      home1.style.opacity = '1'
      home2.style.opacity = '1'
    },
    outfn: () => {
      const home1 = document.querySelector('#content .list .home .home1')
      const home2 = document.querySelector('#content .list .home .home2')

      home1.style.transform = 'translateY(-400px)'
      home2.style.transform = 'translateY(100px)'
      home1.style.opacity = '0'
      home2.style.opacity = '0'
    }
  },
  {
    infn: () => {
      const plane1 = document.querySelector('#content .list .course > div .plane1')
      const plane2 = document.querySelector('#content .list .course > div .plane2')
      const plane3 = document.querySelector('#content .list .course > div .plane3')

      plane1.style.transform = 'translate(0,0)'
      plane2.style.transform = 'translate(0,0)'
      plane3.style.transform = 'translate(0,0)'
    },
    outfn: () => {
      const plane1 = document.querySelector('#content .list .course > div .plane1')
      const plane2 = document.querySelector('#content .list .course > div .plane2')
      const plane3 = document.querySelector('#content .list .course > div .plane3')

      plane1.style.transform = 'translate(-200px,-200px)'
      plane2.style.transform = 'translate(-200px,200px)'
      plane3.style.transform = 'translate(200px,-200px)'
    }
  },
  {
    infn: () => {
      const pencel1 = document.querySelector('#content .list .works > div .pancel1')
      const pencel2 = document.querySelector('#content .list .works > div .pancel2')
      const pencel3 = document.querySelector('#content .list .works > div .pancel3')

      pencel1.style.transform = 'translateY(0)'
      pencel2.style.transform = 'translateY(0)'
      pencel3.style.transform = 'translateY(0)'
    },
    outfn: () => {
      const pencel1 = document.querySelector('#content .list .works > div .pancel1')
      const pencel2 = document.querySelector('#content .list .works > div .pancel2')
      const pencel3 = document.querySelector('#content .list .works > div .pancel3')

      pencel1.style.transform = 'translateY(-100px)'
      pencel2.style.transform = 'translateY(100px)'
      pencel3.style.transform = 'translateY(100px)'
    }
  },
  {
    infn: () => {
      const rect1 = document.querySelector('#content .list .about > div .about3 .item:first-of-type')
      const rect2 = document.querySelector('#content .list .about > div .about3 .item:last-of-type')

      rect1.style.transform = 'rotate(0deg)'
      rect2.style.transform = 'rotate(0deg)'
    },
    outfn: () => {
      const rect1 = document.querySelector('#content .list .about > div .about3 .item:first-of-type')
      const rect2 = document.querySelector('#content .list .about > div .about3 .item:last-of-type')

      rect1.style.transform = 'rotate(45deg)'
      rect2.style.transform = 'rotate(-45deg)'
    }
  },
  {
    infn: () => {
      const rect1 = document.querySelector('#content .list .team > div .team1')
      const rect2 = document.querySelector('#content .list .team > div .team2')

      rect1.style.transform = 'translateX(0)'
      rect2.style.transform = 'translateX(0)'
    },
    outfn: () => {
      const rect1 = document.querySelector('#content .list .team > div .team1')
      const rect2 = document.querySelector('#content .list .team > div .team2')

      rect1.style.transform = 'translateX(-100px)'
      rect2.style.transform = 'translateX(100px)'
    }
  },
]
