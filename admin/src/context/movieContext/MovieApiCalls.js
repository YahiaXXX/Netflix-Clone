import { getMoviesFailure, getMoviesStart, getMoviesSuccess } from "./MovieAction";
import axios from "axios"

export const getMovies = async (dispatch) => {
  dispatch(getMoviesStart());
  try {
    const res = await axios.get("http://localhost:8800/server/movies", {
      headers: {
        token: "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
      },
    }).then((res)=>dispatch(getMoviesSuccess(res.data)));

    
  } catch (err) {
    dispatch(getMoviesFailure());
  }
};
