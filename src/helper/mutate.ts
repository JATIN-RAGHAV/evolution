import type { Clicked_DNA } from "../interfaces/clicked_dna"

export const mutate = (DNA:Clicked_DNA):Clicked_DNA[] =>{
        let res:Clicked_DNA[] =[DNA]
        res[0].clicked = false
        for(var key in DNA){
                if(key != 'clicked'){
                        let new_value= DNA[key as keyof Clicked_DNA]
                        if(typeof new_value == 'number'){
                                if(['length','layers','branches'].includes(key)){
                                        new_value += (Math.random() > 0.5 ? 1 : -1)
                                        new_value = Math.max(1,new_value)
                                        new_value = Math.min(9, new_value)
                                }
                                else{
                                        new_value += (Math.random() > 0.5 ? 1 : -1)
                                }
                        }
                        res.push({
                                ...DNA,
                                [key as keyof Clicked_DNA]:new_value,
                        })
                }
        }
        return res
}
