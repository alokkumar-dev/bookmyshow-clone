import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom";
import{addToken} from '../Reducers/tokenkey/action'
import { useDispatch,useSelector } from "react-redux";
export const MovieDetails = () => {
	const navigate = useNavigate();

	const {id} = useParams();
	const [movie, setMovie] = useState({})

	useEffect(() => {
		getMovies();
},[])

const getMovies = () => {
	axios.get(`https://bookmyshow-clone-fw14.herokuapp.com/movies/${id}`).then((res) => {
		setMovie(res.data)
		// console.log(res.data)
	})
}
const tokens=useSelector((store)=>
store.token.token
)
const Left = styled.div`
	height: 80%;
	width: 20%;
	margin-left: 70px;
	margin-top: 40px
`

const MovieImg = styled.img`
	height: 100%;
	width: 100%;
	border-radius: 10px
`
const Right = styled.div`
	height: 90%;
	width: 50%;
	margin-left: 30px;
	margin-top: 40px
`

const About = styled.div`
	height: 150px;
	width: 65%;
	margin-left: 70px;
`

const Ratings= styled.div`
	background-color: #333333;
	height: 90px;
	width: 450px;
	border-radius: 10px;
	display: flex;
	justify-content: space-evenly
`

 	return <div>
		 <div style={{ 
      backgroundImage: `url(${movie.backgroundImage})`, height: "500px", opacity: "2", display:"flex"
    }}>
		<Left>
			<MovieImg src={movie.imageUrl} />
		</Left>
		<Right style={{color: "white"}}>
			<h1 > {movie.title} </h1>
			<div style={{ display: "flex"}}>
				<FontAwesomeIcon icon={faHeart} style={{color: "#eb4e62", fontSize: "30px"}}/>
				<h4>{movie.ratings} ratings</h4>
			</div>
			<Ratings>
				<div style={{color: "white"}}>
					<p style={{fontSize:"20px", fontWeight:"bold"}}>Add your rating & review</p>
					<p>Your ratings matter</p>
				</div>
				<button style={{margin: "25px 0px", borderRadius: "10px", border: "none"}}>Rate Now</button>
			</Ratings>
			<div style={{height: "30px", width: "300px", backgroundColor: "white", marginTop: "20px", borderRadius: "3px", fontWeight:"bold", color:"black"}}>{movie.screenType}</div>
			<div style={{height: "30px", width: "350px", backgroundColor: "white", marginTop: "20px", borderRadius: "3px", fontWeight:"bold", color:"black"}}>{movie.language}</div>

				<p style={{fontWeight: "bold", color: "white"}}>{movie.duration} {movie.type} . {movie.movieType} . {movie.release}</p>
				<button onClick={()=>{
					{tokens ?navigate(`/payment/${movie._id}`):alert("Sign in first to book tickets")}
					
				}}  style={{width:"200px", height:"50px", borderRadius:"10px", border: "none", backgroundColor:"#eb4e62", color:"white", fontSize:"15px", fontWeight:"bold"}}>Book Tickets</button>
			
		</Right>
      </div>
	  <About>
		  <h2>About the Movie</h2>
		  <p>{movie.about}</p>
		  <hr style={{color:"gray"}}></hr>
	  </About>
	  
	</div>
}