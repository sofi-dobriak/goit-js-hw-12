import{a as w,S as b,i as m}from"./assets/vendor-tnUJPedx.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const r={searchForm:document.querySelector(".js-search-form"),submitButton:document.querySelector(".js-submit-button"),loadButton:document.querySelector(".js-load-button"),gallery:document.querySelector(".js-images-container"),loader:document.querySelector(".loader")};async function g(t,o=1){const a="https://pixabay.com/api/",e={q:t,key:"48725247-1ad674d1a078eddb17b21f3f8",image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:40};try{return(await w.get(a,{params:e})).data}catch(s){throw console.error("API Request Error:",s),s}}function h(){r.loader.classList.remove("hidden"),r.gallery.classList.add("hidden")}function l(){r.loader.classList.add("hidden"),r.gallery.classList.remove("hidden")}function S(t){const{webformatURL:o,largeImageURL:a,tags:i,likes:e,views:s,comments:c,downloads:L}=t;return`
        <li class="image-item">
            <a href=${a}>
                <img class="image" src="${o}"
                alt="${B(i)}">
                <ul class="stat-list">
                    <li class="stat-item">
                        <h3 class="stat-title">Likes</h3>
                        <p class="stat-description">${e}</p>
                    </li>
                    <li class="stat-item">
                        <h3 class="stat-title">Views</h3>
                        <p class="stat-description">${s}</p>
                    </li>
                    <li class="stat-item">
                        <h3 class="stat-title">Comments</h3>
                        <p class="stat-description">${c}</p>
                    </li>
                    <li class="stat-item">
                        <h3 class="stat-title">Downloads</h3>
                        <p class="stat-description">${L}</p>
                    </li>
                </ul>
            </a>
      </li>
      `}function v(t){return t.map(S).join(`
`)}const q=new b(".gallery a",{captionsData:"alt"});function f(t){h();const o=v(t);r.gallery.insertAdjacentHTML("beforeend",o),q.refresh(),l()}function B(t){const a=t.split(",").map(e=>e.trim());return[...new Set(a)].join(", ")}function p(){r.loadButton.classList.remove("hidden"),r.gallery.classList.add("hidden")}function d(){r.loadButton.classList.add("hidden"),r.gallery.classList.remove("hidden")}function P(){m.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}function T(){m.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."})}function y(){m.error({position:"topRight",message:"Oops... Something went wrong! Please, try again."})}function I(){const t=document.querySelector(".image-item");if(t){const{height:o}=t.getBoundingClientRect();window.scrollBy({top:o*2.6,behavior:"smooth"})}}r.searchForm.addEventListener("submit",A);r.loadButton.addEventListener("click",E);let u="",n=1;async function A(t){t.preventDefault(),u=t.target.elements["search-images"].value.trim(),n=1,r.gallery.innerHTML="",h(),d();try{const o=await g(u,n);if(o.hits.length===0){P(),l();return}f(o.hits),l(),o.totalHits>n*40&&p()}catch{y(),l()}t.target.reset()}async function E(){n+=1,h(),d();try{const t=await g(u,n);f(t.hits),l(),p(),t.totalHits<=n*40&&(d(),T()),I()}catch{y()}}
//# sourceMappingURL=index.js.map
