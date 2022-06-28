<script context="module">
    import { onMount } from "svelte/internal";
    const API_KEY = '75353d44bc278e8ae6cd9006dd05fab7';
    const API_URI = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`

    export async function load({fetch}){
        const res = await fetch(API_URI)

        const data = await res.json()
      
        if(res.ok){
            return{
                props: {popular: data.results}
            }
        }
    }
   

</script>


<script>
    import PopularMovies from "../components/popularMovies.svelte";
    import SearchMovies from "../components/SearchMovies.svelte";
    import {fly} from 'svelte/transition'
    export let popular;
</script>

<section in:fly={{y:50, duration:500, delay:500}} out:fly={{duration:500}}>
    <SearchMovies/>
    <PopularMovies {popular} />
</section>

 