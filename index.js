import{S as p,i as h}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function d(i){return i.map(({webformatURL:o,tags:t,largeImageURL:l,likes:e,views:r,comments:n,downloads:u})=>`<li>
             <a class="gallery-link" href="${l}">
               <img src="${o}" alt="${t}" width="300">
             </a>
             <ul>
             <li>
               <h2>Likes</h2>
               <p>${e}</p>
             </li>
             <li>
               <h2>Views</h2>
               <p>${r}</p>
             </li>
             <li>
               <h2>Comments</h2>
               <p>${n}</p>
             </li>
             <li>
               <h2>Downloads</h2>
               <p>${u}</p>
             </li>
             </ul>
       </li>`).join("")}let m=new p(".gallery .gallery-link",{captions:!0,captionsData:"alt",captionDelay:250});const a="47418374-a80c993bb5abb784419bb47e5",c=document.querySelector(".gallery");function y(i){const o=new URLSearchParams({key:a,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"});fetch(`https://pixabay.com/api/?key=${a}&q=${o}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{t.hits.length===0&&h.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",messageColor:"#ffffff",messageSize:"16px",titleColor:"#ffffff"}),c.innerHTML="",console.log(t),c.insertAdjacentHTML("beforeend",d(t.hits)),m.refresh()}).catch(t=>console.log(t)).finally(()=>{s()})}const f=document.querySelector(".form"),g=document.querySelector(".gallery");function b(){loader.style.display="block"}function s(){loader.style.display="none"}f.addEventListener("submit",i=>{i.preventDefault(),b();const t=i.target.elements.search.value.trim();if(t)y(t),s();else{g.innerHTML="",s();return}f.reset()});
//# sourceMappingURL=index.js.map
