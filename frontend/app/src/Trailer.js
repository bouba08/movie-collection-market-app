import { useEffect, useState } from "react"

const Trailer = (id, type)=>{
    
    const [movie, setMovie] = useState(null)
    const [shows, setShows] = useState(null)

    const fetchMovie = async ()=>{
        const response = await fetch(`https://api.kinocheck.de/movies?imdb_id=${id}`)
        const data = await response.json()
        console.log(data)
        setMovie(data) 
    }

    const fetchShows = async ()=>{
        const response = await fetch(`https://api.kinocheck.de/series?imdb_id=${id}`)
        const data = await response.json()
        console.log(data)
        setShows(data) 
    }

    useEffect(()=>{
        fetchMovie()
        fetchShows()
    }, [])

    if (type === "movies" && movie){
        return(
        <div>
            <h1>{movie["title"]} Trailer</h1>
            <a href={`https://www.youtube.com/watch?v=${movie["trailer"]["youtube_video_id"]}`}>
                <img src={movie["trailer"]["youtube_thumbnail"]}></img>
            </a>
        </div>
        )
    } else if (type === "series" && shows){
        return(
        <div>
            <h1>{shows["title"]} Trailer</h1>
            <a href={`https://www.youtube.com/watch?v=${shows["trailer"]["youtube_video_id"]}`}>
                <img src={shows["trailer"]["youtube_thumbnail"]}></img>
            </a>
        </div>
        )
    }

}