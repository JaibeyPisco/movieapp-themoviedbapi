import { c as create_ssr_component, b as add_attribute, e as escape } from "../../../chunks/index-e92a6b2a.js";
var _id__svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "h1.svelte-px088g{padding:1rem 0rem 2rem}p.svelte-px088g{padding:1rem 0rem}.img-container.svelte-px088g{width:100%}img.svelte-px088g{width:100%;border-radius:1rem}.movie-details.svelte-px088g{margin:2rem 20%}span.svelte-px088g{font-weight:bold}")();
const css = {
  code: "h1.svelte-px088g{padding:1rem 0rem 2rem}p.svelte-px088g{padding:1rem 0rem}.img-container.svelte-px088g{width:100%}img.svelte-px088g{width:100%;border-radius:1rem}.movie-details.svelte-px088g{margin:2rem 20%}span.svelte-px088g{font-weight:bold}",
  map: null
};
const API_KEY = "75353d44bc278e8ae6cd9006dd05fab7";
async function load({ fetch, params }) {
  const API_URI = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}&language=en-US`;
  const res = await fetch(API_URI);
  const movieDetail = await res.json();
  if (res.ok) {
    return { props: { movieDetail } };
  }
}
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { movieDetail } = $$props;
  if ($$props.movieDetail === void 0 && $$bindings.movieDetail && movieDetail !== void 0)
    $$bindings.movieDetail(movieDetail);
  $$result.css.add(css);
  return `<div class="${"movie-details svelte-px088g"}"><div class="${"img-container svelte-px088g"}"><img${add_attribute("src", "https://image.tmdb.org/t/p/original/" + movieDetail.backdrop_path, 0)}${add_attribute("alt", movieDetail.title, 0)} class="${"svelte-px088g"}"></div>
    <div class="${"text-container"}"><h1 class="${"svelte-px088g"}">${escape(movieDetail.title)}</h1>
        <p class="${"svelte-px088g"}">${escape(movieDetail.overview)}</p>
        <p class="${"svelte-px088g"}"><span class="${"svelte-px088g"}">Release Date: </span> 
            ${escape(movieDetail.release_date)} <br>
            <span class="${"svelte-px088g"}">Budget: </span> 
            ${escape(movieDetail.budget)} <br>
            <span class="${"svelte-px088g"}">Rating: </span> 
            ${escape(movieDetail.vote_average)} <br>
            <span class="${"svelte-px088g"}">Runtime: </span> 
            ${escape(movieDetail.runtime)}mins <br></p></div>
</div>`;
});
export { U5Bidu5D as default, load };
