import {PURP} from "../common/common"
export class yzsc {
  static Yzpur(cb){
    fetch(PURP).then(response=>{
      response.json().then(data=>{
        cb(data)
      })
    })
  }
}
