import { type DNA } from "../interfaces/dna"
export const initial_dna = ():DNA => {
        return {
                layers:1,
                branches:0,
                del_branches:0,
                angles:0,
                del_angles:0,
                length:1,
                del_length:0,
        }
}
