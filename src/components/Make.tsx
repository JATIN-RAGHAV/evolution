import { make_svg } from "../helper/make_svg"
import type { DNA } from "../interfaces/dna"
import { Print_svg } from "./Print_svg";

export const Make = (props:{dna:DNA})=>{
        let lines = make_svg(props.dna);
        console.log(lines)
        return <>
                <h1> Hello there</h1>
                <Print_svg lines={lines} height={1000} width={1000}/>
        </>
}
