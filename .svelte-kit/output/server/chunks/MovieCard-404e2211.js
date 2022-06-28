import { c as create_ssr_component, b as add_attribute, e as escape } from "./index-e92a6b2a.js";
var MovieCard_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "img.svelte-16k6gfi{width:100%;height:30vh;object-fit:cover;border-radius:1rem;margin-bottom:1rem}h1.svelte-16k6gfi{font-size:0.9rem}.description.svelte-16k6gfi{height:5vh}p.svelte-16k6gfi{font-size:0.7rem}")();
const css = {
  code: "img.svelte-16k6gfi{width:100%;height:30vh;object-fit:cover;border-radius:1rem;margin-bottom:1rem}h1.svelte-16k6gfi{font-size:0.9rem}.description.svelte-16k6gfi{height:5vh}p.svelte-16k6gfi{font-size:0.7rem}",
  map: null
};
const MovieCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { movie } = $$props;
  if ($$props.movie === void 0 && $$bindings.movie && movie !== void 0)
    $$bindings.movie(movie);
  $$result.css.add(css);
  return `<div class="${"movie-card"}"><a sveltekit:prefetch sveltekit:noscroll${add_attribute("href", `/movie/${movie.id}`, 0)}><img${add_attribute("src", "https://image.tmdb.org/t/p/w500/" + movie.poster_path, 0)}${add_attribute("alt", movie.title, 0)} class="${"svelte-16k6gfi"}"></a>
    <div class="${"description svelte-16k6gfi"}"><h1 class="${"svelte-16k6gfi"}">${escape(movie.title)}</h1>
        <p class="${"svelte-16k6gfi"}">${escape(movie.release_date)}</p></div>
</div>`;
});
export { MovieCard as M };
