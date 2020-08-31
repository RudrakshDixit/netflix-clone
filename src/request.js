
const request={
    fetchTrending: '/trending/all/week?api_key=3baeef0c38529052a60a3e59b42245a4',
    fetchNetflixOriginal:'/discover/tv?api_key=3baeef0c38529052a60a3e59b42245a4&language=en',
    fetchTopRated:'/movie/top_rated?api_key=3baeef0c38529052a60a3e59b42245a4&language=en',
    fetchActionMovies: '/discover/movie?api_key=3baeef0c38529052a60a3e59b42245a4&sort_by=popularity.desc&with_genres=28',
    fetchComedyMovies: '/discover/movie?api_key=3baeef0c38529052a60a3e59b42245a4&sort_by=popularity.desc&with_genres=35',
    fetchHorrorMovies:'/discover/movie?api_key=3baeef0c38529052a60a3e59b42245a4&sort_by=popularity.desc&with_genres=27',
    fetchRomanceMovies:'/discover/movie?api_key=3baeef0c38529052a60a3e59b42245a4&sort_by=popularity.desc&with_genres=10749',
    fetchDocumentaries:'/discover/movie?api_key=3baeef0c38529052a60a3e59b42245a4&sort_by=popularity.desc&with_genres=99',
}

export default request;