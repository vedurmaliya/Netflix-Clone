const key = "cb4e5fd2afefb5f8fae76936c091fa97"

const requests = {
    Popular : `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    TopRated : `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    Trending : `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2` , 
    Upcoming : `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    Comedy : `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&page=1&query=comedy&pagr=1`, 
    Horror : `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&page=1&query=horror&pagr=1`, 
    Adventure : `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&page=1&query=adventure&pagr=1`, 
    History : `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&page=1&query=history&pagr=1`, 
};

export default requests;