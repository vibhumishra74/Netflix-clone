import Apikey from "./apikey";
const request = {
  fetchTrending: `/trending/all/week?api_key=${Apikey}&language=en-US`,
  fetchNetflixOrignals: `/trending/all/week?api_key=${Apikey}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${Apikey}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${Apikey}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${Apikey}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${Apikey}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${Apikey}&with_genres=10749`,
  fetchDocumentries: `/discover/movie?api_key=${Apikey}&with_genres=99`,
};
export default request;
