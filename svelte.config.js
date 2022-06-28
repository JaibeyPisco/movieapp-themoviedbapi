import adapter from "@sveltejs/adapter-static"; 

/** @type {import('@sveltejs/kit').Config} */

const dev = "production" === "development";

/** @type {import(""@sveltejs/kit").Config} */
const config = {
    kit: {
        adapter: adapter({
            pages: "docs",
            assets: "docs"
        }),
        paths: {
            // change below to your repo name
            base: dev ? "" :"/movieapp-themoviedbapi",
        },
        // hydrate the <div id="svelte"> element in src/app.html
       
    }
};
export default config;
