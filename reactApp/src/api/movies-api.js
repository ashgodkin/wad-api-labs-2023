export const getMovies = async () => {
    //const response = await  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`);
    const response = await fetch('http://localhost:8080/movies-api/api/movies', {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }}
    );
    return response.json()
  };

  export const login = async (username, password) => {
    const response = await fetch('http://localhost:8080/movies-api/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    });
    return response.json();
};

export const signup = async (username, password) => {
    const response = await fetch('http://localhost:8080/movies-api/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    });
    return response.json();
};