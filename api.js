import axios from "axios";
import apiKey from "./key";

export default api = axios.create({
  baseURL: `https://api.themoviedb.org/3/movie/550?api_key=${apiKey}`
});
