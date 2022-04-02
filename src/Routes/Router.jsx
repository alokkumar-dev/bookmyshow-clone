import {Route,Routes} from "react-router-dom"
import { Home } from "../components/Home"
import { MovieDetails } from "../components/MovieDetails"

import { Payment } from "../components/payment"
export const Router=()=>{
    return(
<Routes>
    < Route path="/" element={<Home/>}/>
    < Route path="/movies/:id" element={<MovieDetails/>}/>
    < Route path="/payment" element={<Payment/>}/>
</Routes>

    )
}

