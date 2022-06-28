import { c as create_ssr_component, v as validate_component } from "../../chunks/index-e92a6b2a.js";
var global = /* @__PURE__ */ (() => "*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: 'Poppins', sans-serif;\r\n}\r\nbody{\r\n    margin: 0 10%;\r\n    background-color: #0b0c2a;\r\n    color: white;\r\n}\r\n\r\n")();
var Nav_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "nav.svelte-s2lkfh.svelte-s2lkfh{display:flex;min-height:10vh;justify-content:space-between;align-items:center;background:#07071f;padding-left:20px;padding-right:20px}nav.svelte-s2lkfh ul.svelte-s2lkfh{display:flex;justify-content:space-between;align-items:center}.logo.svelte-s2lkfh.svelte-s2lkfh{font-size:20px;color:#e43637}li.svelte-s2lkfh.svelte-s2lkfh{list-style:none;margin:20px;text-decoration:none}a.svelte-s2lkfh.svelte-s2lkfh{color:white;text-decoration:none}a.svelte-s2lkfh.svelte-s2lkfh:hover{color:#e43637}")();
const css$1 = {
  code: "nav.svelte-s2lkfh.svelte-s2lkfh{display:flex;min-height:10vh;justify-content:space-between;align-items:center;background:#07071f;padding-left:20px;padding-right:20px}nav.svelte-s2lkfh ul.svelte-s2lkfh{display:flex;justify-content:space-between;align-items:center}.logo.svelte-s2lkfh.svelte-s2lkfh{font-size:20px;color:#e43637}li.svelte-s2lkfh.svelte-s2lkfh{list-style:none;margin:20px;text-decoration:none}a.svelte-s2lkfh.svelte-s2lkfh{color:white;text-decoration:none}a.svelte-s2lkfh.svelte-s2lkfh:hover{color:#e43637}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<nav class="${"svelte-s2lkfh"}"><div class="${"logo svelte-s2lkfh"}"><a href="${"/"}" class="${"svelte-s2lkfh"}">JBCINE</a></div>
   <ul class="${"svelte-s2lkfh"}"><li class="${"svelte-s2lkfh"}"><a href="${"/"}" class="${"svelte-s2lkfh"}">Logo</a></li>
    <li class="${"svelte-s2lkfh"}"><a href="${"/"}" class="${"svelte-s2lkfh"}">Movie database</a></li>
    <li class="${"svelte-s2lkfh"}"><a href="${"/"}" class="${"svelte-s2lkfh"}">Movie database</a></li>
    <li class="${"svelte-s2lkfh"}"><a href="${"/"}" class="${"svelte-s2lkfh"}">Movie database</a></li></ul>
</nav>`;
});
var Footer_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "footer.svelte-q7ztuw.svelte-q7ztuw{margin-top:3rem;display:flex;align-items:center;justify-content:center;bottom:0;height:4rem;background:#07071f}footer.svelte-q7ztuw div.svelte-q7ztuw{color:white}")();
const css = {
  code: "footer.svelte-q7ztuw.svelte-q7ztuw{margin-top:3rem;display:flex;align-items:center;justify-content:center;bottom:0;height:4rem;background:#07071f}footer.svelte-q7ztuw div.svelte-q7ztuw{color:white}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="${"svelte-q7ztuw"}"><div class="${"svelte-q7ztuw"}">\xA9 Jaibey Pisco</div>
</footer>`;
});
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Movie DB</title>`, ""}`, ""}

    ${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}

${slots.default ? slots.default({}) : ``}

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export { _layout as default };
