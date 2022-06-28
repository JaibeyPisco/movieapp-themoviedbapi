import { c as create_ssr_component, a as each, v as validate_component } from "../../../chunks/index-e92a6b2a.js";
import { M as MovieCard } from "../../../chunks/MovieCard-404e2211.js";
var _id__svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".searched-movies.svelte-1nxwcat{display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));grid-column-gap:1rem;grid-row-gap:2rem;margin-top:20px}")();
const css = {
  code: ".searched-movies.svelte-1nxwcat{display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));grid-column-gap:1rem;grid-row-gap:2rem;margin-top:20px}",
  map: null
};
const API_KEY = "75353d44bc278e8ae6cd9006dd05fab7";
async function load({ fetch, params }) {
  const API_URI = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${params.id}&page=1&include_adult=true`;
  const res = await fetch(API_URI);
  const data = await res.json();
  if (res.ok) {
    return { props: { searchMovie: data.results } };
  }
}
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { searchMovie } = $$props;
  if ($$props.searchMovie === void 0 && $$bindings.searchMovie && searchMovie !== void 0)
    $$bindings.searchMovie(searchMovie);
  $$result.css.add(css);
  return `<div class="${"searched-movies svelte-1nxwcat"}">${each(searchMovie, (movie) => {
    return `${validate_component(MovieCard, "MovieCard").$$render($$result, { movie }, {}, {})}`;
  })}
</div>`;
});
export { U5Bidu5D as default, load };
