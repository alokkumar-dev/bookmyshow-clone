import { useEffect, useState } from "react"
import axios from "axios"
import { useDispatch } from "react-redux"
import { addMovie } from "../Redux/action";
import { store } from "../Redux/store";

export const Recommended = () => {

const [recommended, setRecommended] = useState([])
const dispatch= useDispatch();

useEffect(() => {
		getMovies();
	dispatch(addMovie(recommended))
},[])

const getMovies = () => {
	axios.get("http://localhost:5000/movies").then((res) => {
		console.log(res.data)
		setRecommended(res.data)
	})
}

	return (
		<div>Movies</div>
	)
}