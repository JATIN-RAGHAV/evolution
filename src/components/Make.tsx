import { adjust_container } from "../helper/adjust_container";
import { Organism_height,Organism_width } from "../helper/constants";
import { make_svg } from "../helper/make_svg"
import type { DNA } from "../interfaces/dna"
import { Print_svg } from "./Print_svg";

export const Make = ({dna, onClick}:{dna:DNA, onClick:() => void})=>{
        let lines = make_svg(dna);
        let height = Organism_height;
        let width = Organism_width;
        return <>
                <div className={`border h-{${height}} w-{${width}} min-w-{${width+10}} cursor-pointer`} onClick={onClick}>
                        <Print_svg lines={adjust_container(lines,height,width)} height={height} width={width}/>
                </div>
        </>
}
