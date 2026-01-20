import { type line } from "../interfaces/line"

export const adjust_container = (lines:line[], height:number, width:number):line[]=>{
        let res:line[] = []
        let min_x = Infinity;
        let min_y = Infinity;
        let max_x = -Infinity;
        let max_y = -Infinity;
        for(const line of lines){
                min_x = Math.min(min_x, line.start.x,line.end.x)
                max_x = Math.max(max_x, line.start.x,line.end.x)
                min_y = Math.min(min_y, line.start.y,line.end.y)
                max_y = Math.max(max_y, line.start.y,line.end.y)
        }
        let cheight = max_y-min_y;
        let cwidth = max_x-min_x;
        let factor = (height-15)/cheight;
        if((factor*cwidth)>=width){
                factor = (width-15)/cwidth;
        }
        for(const line of lines){
                res.push({
                        start:{
                                x:line.start.x*factor,
                                y:line.start.y*factor
                        },
                        end:{
                                x:line.end.x*factor,
                                y:line.end.y*factor
                        }
                })
        }
        return res
}
