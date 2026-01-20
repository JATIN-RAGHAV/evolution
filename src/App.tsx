import { useState } from 'react'
import './App.css'
import { Organ_grid } from './components/Organ_grid'
import { type DNA } from './interfaces/dna'
import { initial_dna } from './helper/initial_dna'

function App() {
        const [DNAs,setDNAs] = useState<DNA[]>([initial_dna()])
        console.log(DNAs)
        return (
                <>
                        <Organ_grid DNAs={DNAs}/>
                </>
        )
}

export default App
