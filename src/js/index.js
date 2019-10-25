import frame from "./frame/frame"
import home from "./business/home"
import "./business/course"
import "./business/works"
import about from "./business/about"
import team from "./business/team"
import accessArr from "./business/access/access"
import music from "./music/music"
import open from "./open/open"

open()
window.onload = () => {
  frame()
  home()
  team()
  about()
  music()
  for (let i = 0; i < accessArr.length; i++) {
    accessArr[i]['outfn']()
  }
  setTimeout(() => accessArr[0]['infn'](), 1500)
}