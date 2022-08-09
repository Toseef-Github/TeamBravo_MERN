import React from "react";
import axios from "axios";

function App() {
    const [movieState, setMovieState] = useState("Enter a movie title below");
    const [data, setData] = useState("");
    const fetchMovie = async () => {
      const { data } = await axios.get(

        "http://www.omdbapi.com/?i=tt3896198&apikey=5b637320" + movieState
      );
  
      setData(data);
    };
}