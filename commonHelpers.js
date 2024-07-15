import{S as c,i as a}from"./assets/vendor-0fc460d7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const l="44930065-b56e1482fbed5c821691768f3";function d(n){return fetch(`https://pixabay.com/api/?key=${l}&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function u(n){const t=document.getElementById("gallery");t.innerHTML=n.map(o=>`
    <a href="${o.largeImageURL}">
      <img src="${o.webformatURL}" alt="${o.tags}" />
      <div class="info">
        <div><p>Likes:</p> ${o.likes}</div>
        <div><p>Views:</p> ${o.views}</div>
        <div><p>Comments:</p> ${o.comments}</div>
        <div><p>Downloads:</p> ${o.downloads}</div>
      </div>
    </a>
  `).join(""),new c(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}function f(){document.getElementById("gallery").innerHTML=""}function m(){document.getElementById("loader").style.display="block"}function y(){document.getElementById("loader").style.display="none"}document.getElementById("search-form").addEventListener("submit",function(n){n.preventDefault();const t=document.getElementById("search-input").value.trim();if(!t){a.error({title:"Error",message:"Please enter a search query"});return}f(),d(t).then(s=>{s.hits.length===0?a.warning({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"}):u(s.hits)}).catch(s=>{a.error({title:"Error",message:"Failed to fetch images"})}).finally(()=>{y(),document.getElementById("search-form").reset()})});const p=document.querySelector(".search-button");p.addEventListener("click",function(){m()});
//# sourceMappingURL=commonHelpers.js.map
