import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons"

export const MovieDetails = () => {
	const {id} = useParams();
	const [movie, setMovie] = useState({})

	useEffect(() => {
		getMovies();
},[])

const getMovies = () => {
	axios.get(`http://localhost:5000/movies/${id}`).then((res) => {
		setMovie(res.data)
		// console.log(res.data)
	})
}

const Left = styled.div`
	height: 80%;
	width: 20%;
	margin-left: 30px;
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
	border: 2px solid red;
	margin-left: 30px;
	margin-top: 40px
`

 	return <div>
		 <div style={{ 
      backgroundImage: `url(${movie.backgroundImage})`, height: "500px", opacity: "2", display:"flex"
    }}>
		<Left>
			<MovieImg src={movie.imageUrl} />
		</Left>
		<Right>
			<h1> {movie.title} </h1>
			<div style={{ display: "flex"}}>
				<FontAwesomeIcon icon={faHeart} style={{color: "#eb4e62", fontSize: "30px"}}/>
				<h4>{movie.ratings}</h4>
			</div>
			
		</Right>
      </div>
	</div>
}