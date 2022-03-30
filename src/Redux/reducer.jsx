import { ADD_MOVIE } from "./action";

const initState= { movies:[] }

export const reducer = (store=initState, {type, payload}) => {
		switch (type){
			case ADD_MOVIE:
				// console.log("x", store) 
			return {
				...store,
				movies:[...payload]
			};
			default:
				return store
		}
}