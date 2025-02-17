import{a as y,S as L,i as m}from"./assets/vendor-tnUJPedx.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();const r={searchForm:document.querySelector(".js-search-form"),submitButton:document.querySelector(".js-submit-button"),loadButton:document.querySelector(".js-load-button"),gallery:document.querySelector(".js-images-container"),loader:document.querySelector(".loader")};async function h(e,s=1){const a="https://pixabay.com/api/",t={q:e,key:"48725247-1ad674d1a078eddb17b21f3f8",image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:40};try{return(await y.get(a,{params:t})).data}catch(o){throw console.error("API Request Error:",o),o}}function u(){r.loader.classList.remove("hidden"),r.gallery.classList.add("hidden")}function l(){r.loader.classList.add("hidden"),r.gallery.classList.remove("hidden")}function w(e){const{webformatURL:s,largeImageURL:a,tags:i,likes:t,views:o,comments:c,downloads:p}=e;return`
        <li class="image-item">
            <a href=${a}>
                <img class="image" src="${s}"
                alt="${v(i)}">
                <ul class="stat-list">
                    <li class="stat-item">
                        <h3 class="stat-title">Likes</h3>
                        <p class="stat-description">${t}</p>
                    </li>
                    <li class="stat-item">
                        <h3 class="stat-title">Views</h3>
                        <p class="stat-description">${o}</p>
                    </li>
                    <li class="stat-item">
                        <h3 class="stat-title">Comments</h3>
                        <p class="stat-description">${c}</p>
                    </li>
                    <li class="stat-item">
                        <h3 class="stat-title">Downloads</h3>
                        <p class="stat-description">${p}</p>
                    </li>
                </ul>
            </a>
      </li>
      `}function b(e){return e.map(w).join(`
`)}const S=new L(".gallery a",{captionsData:"alt"});function g(e){u();const s=b(e);r.gallery.insertAdjacentHTML("beforeend",s),S.refresh(),l()}function v(e){const a=e.split(",").map(t=>t.trim());return[...new Set(a)].join(", ")}function q(){r.loadButton.classList.remove("hidden"),r.gallery.classList.add("hidden")}function f(){r.loadButton.classList.add("hidden"),r.gallery.classList.remove("hidden")}function B(){m.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}function T(){m.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."})}function I(){const e=document.querySelector(".image-item");if(e){const{height:s}=e.getBoundingClientRect();window.scrollBy({top:s*2.6,behavior:"smooth"})}}r.searchForm.addEventListener("submit",P);r.loadButton.addEventListener("click",A);let d="",n=1;async function P(e){e.preventDefault(),d=e.target.elements["search-images"].value.trim(),n=1,r.gallery.innerHTML="",u(),f();try{const s=await h(d,n);if(s.hits.length===0){B(),l();return}g(s.hits),l(),s.totalHits>n*40&&q()}catch(s){console.log(s),l()}e.target.reset()}async function A(){n+=1,u();try{const e=await h(d,n);g(e.hits),l(),e.totalHits<=n*40&&(f(),T()),I()}catch(e){console.log(e)}}
//# sourceMappingURL=index.js.map
