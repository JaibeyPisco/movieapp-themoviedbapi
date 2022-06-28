<script context="module">
    import { onMount } from "svelte/internal";
    const API_KEY = '75353d44bc278e8ae6cd9006dd05fab7';

    export async function load({fetch, params}){
        const API_URI = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${params.id}&page=1&include_adult=true`
        const res = await fetch(API_URI)
        
        const data = await res.json()
      
        if(res.ok){
            return{
                props: {searchMovie: data.results }
            }
        }
    }

</script>

<script>
    import MovieCard from "../../components/MovieCard.svelte";
    export let searchMovie
    import {fly} from 'svelte/transition'
</script>

<div class="searched-movies" in:fly={{y:50, duration:500, delay:500}} out:fly={{duration:500}}>
    {#each searchMovie as movie }
        <MovieCard {movie}/>
    {/each}
</div>  
<style>
    .searched-movies{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-column-gap: 1rem;
        grid-row-gap: 2rem;
        margin-top: 20px;

    }
</style>
