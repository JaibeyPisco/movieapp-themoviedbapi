<script context="module">
    import { onMount } from "svelte/internal";
    const API_KEY = '75353d44bc278e8ae6cd9006dd05fab7';

   

    export async function load({fetch, params}){
        const API_URI = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}&language=en-US`
        const res = await fetch(API_URI)
        
        const movieDetail = await res.json()
      
        if(res.ok){
            return{
                props: {movieDetail}
            }
        }
    }

</script>

<script>
    export let movieDetail;
    import {fly} from 'svelte/transition'
</script>

<div class="movie-details" in:fly={{y:50, duration:500, delay:500}} out:fly={{duration:500}}> 
    <div class="img-container">
        <img src={"https://image.tmdb.org/t/p/original/" + movieDetail.backdrop_path} alt={movieDetail.title}>
    </div>
    <div class="text-container">
        <h1>{movieDetail.title}</h1>
        <p>{movieDetail.overview}</p>
        <p>
            <span>Release Date: </span> 
            {movieDetail.release_date} <br>
            <span>Budget: </span> 
            {movieDetail.budget} <br>
            <span>Rating: </span> 
            {movieDetail.vote_average} <br>
            <span>Runtime: </span> 
            {movieDetail.runtime}mins <br>
           
        </p>
    </div>
</div>

<style>
    h1{
        padding: 1rem 0rem 2rem;
    }
    p{
        padding: 1rem 0rem;
    }

    .img-container{
        width: 100%;
    }

    img{
        width: 100%;
        border-radius: 1rem;
    }
    .movie-details{
        margin: 2rem 20%;
        
    }
    span{
        font-weight: bold;
    }

</style>