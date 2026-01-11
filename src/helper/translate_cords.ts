import { type point } from "../interfaces/point"

export const translate = (p:point, width:number, height:number):point=>{
        return {
                x:p.x+(width/2),
                y:p.y+(height/2)
        }
}
