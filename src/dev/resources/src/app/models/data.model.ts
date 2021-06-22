export interface ICelebrity {
    id: number,
    name : string,
    nickname: string,
    birthdate : Date,
    birthplace: string,
    minibio: string,
    height : string,
    headshot : string,
    moviesList : string[]
}

export interface IMovie {
    id: number,
    year: number,
    title: string,
    budget: string,
    cover_url: string,
    actors: string[],
    genres: string[],
    directors: string[],
    plot: string[]    
}
