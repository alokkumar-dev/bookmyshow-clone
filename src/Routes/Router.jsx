import {Route,Routes} from "react-router-dom"
import { Home } from "../components/homepage"
import { Movie } from "../components/movies"
export const Router=()=>{
    return(
<Routes>
    < Route path="/" element={<Home/>}/>
    < Route path="/movies" element={<Movie/>}/>
</Routes>

    )
}

