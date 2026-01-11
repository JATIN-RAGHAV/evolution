import './App.css'
import {Make} from './components/Make'
import { type DNA } from './interfaces/dna'

function App() {
        let dna:DNA = {
                layers:3,
                branches:2,
                del_branches:1,
                angles:3,
                del_angles:0,
                length:6,
                del_length:-1,
        }
        return (
                <>
                        <Make dna={dna}/>
                </>
        )
}

export default App
