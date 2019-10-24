import "./frame/frame"
import home from "./business/home"
import "./business/course"
import "./business/works"
import about from "./business/about"
import team from "./business/team"
import accessArr from "./business/access/access"

home()
team()
about()
for (let i = 0; i < accessArr.length; i++) {
  accessArr[i]['outfn']()
}
setTimeout(() => accessArr[0]['infn'](),2000)

