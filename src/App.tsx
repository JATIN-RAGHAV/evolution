import { useEffect, useState } from 'react'
import './App.css'
import { Organ_grid } from './components/Organ_grid'
import { type Clicked_DNA } from './interfaces/clicked_dna'
import { initial_dna } from './helper/initial_dna'
import { useNavigate } from 'react-router'

function App() {
        const navigate = useNavigate()
        const [DNAs,setDNAs] = useState<Clicked_DNA[]>([{
                ...initial_dna(),
                clicked:false
        }])

        const onClick = (index:number) => {
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
                return res
        }
        useEffect(() => {
                for(const DNA of DNAs){
                        if(DNA.clicked){
                                let mutated = mutate(DNA)
                                setDNAs(mutated)
                        }
                }
        },[DNAs])
        return (
                <>
                        <div className='h-max min-h-dvh w-dvw text-red-800 text-center pt-8 bg-black font-robot text-7xl flex flex-col justify-center'>
                                <div onClick={() => {navigate("/")}} className='hover:cursor-pointer'>
                                Let's Evolve
                                </div>
                                <Organ_grid DNAs={DNAs} onClick={onClick}/>
                        </div>
                </>
        )
}

export default App
