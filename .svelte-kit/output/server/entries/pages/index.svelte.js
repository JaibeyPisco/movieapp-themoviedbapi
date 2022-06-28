import { c as create_ssr_component, a as each, v as validate_component, e as escape, n as null_to_empty, b as add_attribute } from "../../chunks/index-e92a6b2a.js";
import { M as MovieCard } from "../../chunks/MovieCard-404e2211.js";
var popularMovies_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "h3.svelte-19dfrtz{padding:1rem 0 ;font-size:1.5rem;text-align:center}.popular-movies.svelte-19dfrtz{display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));grid-column-gap:1rem;grid-row-gap:2rem}")();
const css$1 = {
  code: "h3.svelte-19dfrtz{padding:1rem 0 ;font-size:1.5rem;text-align:center}.popular-movies.svelte-19dfrtz{display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));grid-column-gap:1rem;grid-row-gap:2rem}",
  map: null
};
const PopularMovies = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { popular } = $$props;
  if ($$props.popular === void 0 && $$bindings.popular && popular !== void 0)
    $$bindings.popular(popular);
  $$result.css.add(css$1);
  return `<h3 class="${"svelte-19dfrtz"}">Popular movies from popular page</h3>
<div class="${"popular-movies svelte-19dfrtz"}">${each(popular, (movie) => {
    return `${validate_component(MovieCard, "MovieCard").$$render($$result, { movie }, {}, {})}`;
  })}
</div>`;
});
var SearchMovies_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".search.svelte-pfeaud{position:relative;width:30%;margin:1rem}button.svelte-pfeaud{font-size:0.7rem;padding:0rem 1rem;background:#e43637;color:white;font-weight:bold;border:none;position:absolute;bottom:50%;right:0;transform:translate(0, 50%);height:100%;border-top-right-radius:10%;border-bottom-right-radius:10px;cursor:pointer}input.svelte-pfeaud{width:100%;border:none;font-size:1rem;font-family:'Poppins', sans-serif;outline:none;color:rgb(225, 255, 255);padding:0.5rem 0.1rem;transition:background 0.75s ease-out;font-weight:bold;background:#07071f;border-radius:10px;padding:1rem}label.svelte-pfeaud{position:absolute;font-size:0.8rem;top:50%;left:0;transform:translate(0, -50%);pointer-events:none;color:#fff;padding:0rem 1rem}input.selected.svelte-pfeaud{background:#060624}")();
const css = {
  code: ".search.svelte-pfeaud{position:relative;width:30%;margin:1rem}button.svelte-pfeaud{font-size:0.7rem;padding:0rem 1rem;background:#e43637;color:white;font-weight:bold;border:none;position:absolute;bottom:50%;right:0;transform:translate(0, 50%);height:100%;border-top-right-radius:10%;border-bottom-right-radius:10px;cursor:pointer}input.svelte-pfeaud{width:100%;border:none;font-size:1rem;font-family:'Poppins', sans-serif;outline:none;color:rgb(225, 255, 255);padding:0.5rem 0.1rem;transition:background 0.75s ease-out;font-weight:bold;background:#07071f;border-radius:10px;padding:1rem}label.svelte-pfeaud{position:absolute;font-size:0.8rem;top:50%;left:0;transform:translate(0, -50%);pointer-events:none;color:#fff;padding:0rem 1rem}input.selected.svelte-pfeaud{background:#060624}",
  map: null
};
const SearchMovies = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let inputValue = "";
  $$result.css.add(css);
  return `<form class="${"search svelte-pfeaud"}">${`<label for="${"search_movie"}" class="${"svelte-pfeaud"}">Search movie</label>`}
	<input type="${"text"}" name="${"search_movie"}" class="${escape(null_to_empty("")) + " svelte-pfeaud"}"${add_attribute("value", inputValue, 0)}>
	${``}
    

</form>`;
});
const API_KEY = "75353d44bc278e8ae6cd9006dd05fab7";
const API_URI = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
async function load({ fetch }) {
  const res = await fetch(API_URI);
  const data = await res.json();
  if (res.ok) {
    return { props: { popular: data.results } };
  }
}
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { popular } = $$props;
  if ($$props.popular === void 0 && $$bindings.popular && popular !== void 0)
    $$bindings.popular(popular);
  return `<section>${validate_component(SearchMovies, "SearchMovies").$$render($$result, {}, {}, {})}
    ${validate_component(PopularMovies, "PopularMovies").$$render($$result, { popular }, {}, {})}</section>`;
});
export { Routes as default, load };
