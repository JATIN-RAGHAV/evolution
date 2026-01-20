
import { type DNA } from "../interfaces/dna"
import { Make } from "./Make"

export const Organ_grid = (props:{DNAs:DNA[]}) => {
        return <>
                <div className="flex flex-wrap gap-4 justify-evenly m-4">
                        {
                                props.DNAs.map(d => {
                                        return <Make dna={d}/>
                                })
                        }
                </div>
        </>
}
