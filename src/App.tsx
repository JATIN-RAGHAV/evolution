import { useEffect, useState } from 'react'
import './App.css'
import { Organ_grid } from './components/Organ_grid'
import { type Clicked_DNA } from './interfaces/clicked_dna'
import { initial_dna } from './helper/initial_dna'

function App() {
        const [DNAs,setDNAs] = useState<Clicked_DNA[]>([{
                ...initial_dna(),
                clicked:false
        }])

        const onClick = (index:number) => {
                console.log('clicked')
                setDNAs(prev => 
                        prev.map((value, i) => 
                                (i == index )? {
                                        ...value,
                                        clicked:true
                                } : value
                        )
                )
        }
        const mutate = (DNA:Clicked_DNA):Clicked_DNA[] =>{
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
                console.log(res)
                return res
        }
        useEffect(() => {
                for(const DNA of DNAs){
                        if(DNA.clicked){
                                let mutated = mutate(DNA)
                                setDNAs(mutated)
                        }
                }
                console.log(DNAs)
        },[DNAs])
        return (
                <>
                        <div className='text-blue-500 font-bold font-robot text-7xl flex justify-center '>
                                Let's Evolve
                        </div>
                        <Organ_grid DNAs={DNAs} onClick={onClick}/>
                </>
        )
}

export default App
