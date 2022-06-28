<script>
import global from '../global.css'
import Nav from '../components/Nav.svelte'
import Footer from '../components/Footer.svelte'

</script>
<svelte:head>
    <title>Movie DB</title>
</svelte:head>

    <Nav/>

<slot />

<Footer/>