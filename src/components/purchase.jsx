import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import { useSelector } from "react-redux"

export const Purchase=()=>{
    const recommended=useSelector((store)=>
store.movie.movies
)

    return(
        <div className="purchase">
            <div className="purfirst"></div>
            <div className="pursecond">
            
          
            {recommended.map((el) => {
                console.log(el)
              
            })}
          
       
            </div>
        </div>
    )
}