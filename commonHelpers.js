import{S as f,i as a}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m="43935418-e568f8ae63502e120d68b032c",p="https://pixabay.com/api/";async function y(s,o=1){const t=await fetch(`${p}?key=${m}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true&page=${o}&per_page=12`);if(!t.ok)throw new Error("Failed to fetch images");return await t.json()}function g(s){const o=document.querySelector(".gallery"),t=s.map(({webformatURL:i,largeImageURL:e,tags:r,likes:n,views:l,comments:u,downloads:d})=>`
        <li>
            <a href="${e}">
                <img src="${i}" alt="${r}" loading="lazy" />
            </a>
            <div class="info">
                <p>Likes: ${n}</p>
                <p>Views: ${l}</p>
                <p>Comments: ${u}</p>
                <p>Downloads: ${d}</p>
            </div>
        </li>`).join("");o.innerHTML=t,new f(".gallery a").refresh()}function h(){document.querySelector(".gallery").innerHTML=""}const L=document.querySelector("#search-form"),c=document.querySelector("#loader");L.addEventListener("submit",async s=>{s.preventDefault();const o=s.currentTarget.elements.query.value.trim();if(o===""){a.error({title:"Error",message:"Search query cannot be empty!"});return}c.classList.remove("hidden"),h();try{const t=await y(o);t.hits.length===0?a.warning({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"}):g(t.hits)}catch(t){a.error({title:"Error",message:t.message})}finally{c.classList.add("hidden")}});
//# sourceMappingURL=commonHelpers.js.map
