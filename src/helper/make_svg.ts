import { type DNA } from "../interfaces/dna"
import { type line } from "../interfaces/line"
const pixels_per_length = 40;

export const make_svg = (dna:DNA):line[] => {
        let res:line[] = []
        let front:line[] = []
        let length = dna.length*pixels_per_length;
        let angle = (dna.angles/10)*2*Math.PI;
        let branch = dna.branches;
        front.push({
                start:{
                        x:0,
                        y:length/2
                },
                end:{
                        x:0,
                        y:-length/2
                }
        },{
                        start:{
                                x:0,
                                y:-length/2
                        },
                        end:{
                                x:0,
                                y:length/2
                        }
                }
        )
        res.push(front[0])
        for(let i = 1;i<dna.layers;i++){
                let new_front:line[] = []
                length = Math.min(9*pixels_per_length,length+(dna.del_length*pixels_per_length));
                for( const line of front){
                        let angle_space = (2*Math.PI - angle)/(branch+1);
                        let base_angle = angle_space;
                        for(let j = 0;j<branch;j++){
                                // st1 = line.x1,line.y1
                                // ed1 = line.x2, line.y2
                                const between_angle = base_angle+(j*angle_space)
                                let first_angle = (line.end.y-line.start.y)/(line.end.x-line.start.x);
                                if(line.end.x == line.start.x){
                                        first_angle = Math.PI/2;
                                }
                                const second_angle = -first_angle + between_angle;
                                const x2 = line.end.x + Math.cos(second_angle)*length;
                                const y2 = line.end.y + Math.sin(second_angle)*length;
                                console.log(between_angle)
                                new_front.push({
                                        start:{
                                                x:line.end.x,
                                                y:line.end.y
                                        },
                                        end:{
                                                x:x2,
                                                y:y2
                                        }
                                })
                        }
                }
                front = new_front;
                for(const f of front){
                        res.push(f)
                }
                angle = Math.min(9,angle+dna.del_angles);
                branch = Math.min(9,branch+dna.del_branches);
        }
        return res
}
