
import { type DNA } from "../interfaces/dna"
import { Make } from "./Make"

export const Organ_grid = (props:{DNAs:DNA[], onClick:Function}) => {
        return <>
                <div className="flex flex-wrap gap-4 justify-evenly m-4">
                        {
                                props.DNAs.map((d,i) => {
                                        return <Make dna={d} onClick={() => {props.onClick(i)}}/>
                                })
                        }
                </div>
        </>
}
