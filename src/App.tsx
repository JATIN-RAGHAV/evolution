import { useEffect, useState } from 'react'
import './App.css'
import { Organ_grid } from './components/Organ_grid'
import { type Clicked_DNA } from './interfaces/clicked_dna'
import { initial_dna } from './helper/initial_dna'
import { useNavigate } from 'react-router'
import { mutate } from './helper/mutate'

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
