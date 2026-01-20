import type { line } from "../interfaces/line"
import { type point } from "../interfaces/point"

export const translate = (lines:line[], width:number, height:number):line[]=>{
        let max_x = -Infinity;
        let max_y = -Infinity;
        let min_x = Infinity;
        let min_y = Infinity;
        for(const line of lines){
                max_x = Math.max(max_x, line.start.x,line.end.x)
                min_x = Math.min(min_x, line.start.x,line.end.x)
                max_y = Math.max(max_y, line.start.y,line.end.y)
                min_y = Math.min(min_y, line.start.y,line.end.y)
        }
        let res:line[] = [];
        let spacex = width - (max_x - min_x)
        let spacey = height - (max_y - min_y)
        let delx = (spacex/2) - min_x
        let dely = (spacey/2) - min_y
        for(const line of lines){
                let start:point = {
                        x:line.start.x+delx,
                        y:line.start.y+dely
                }
                let end:point = {
                        x:line.end.x+delx,
                        y:line.end.y+dely
                }
                res.push({
                        start,
                        end
                })
        }
        return res
}
