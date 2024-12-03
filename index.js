import{i as d}from"./assets/vendor-17o45ynk.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const l="47418374-a80c993bb5abb784419bb47e5",a=document.querySelector(".form");document.querySelector(".input");document.querySelector(".button");const c=document.querySelector(".gallery");a.addEventListener("submit",i=>{i.preventDefault();const o=new URLSearchParams({key:l,q:i.target.elements.search.value,image_type:"photo",orientation:"horizontal",safesearch:"true"});console.log(i.target.elements.search.value),fetch(`https://pixabay.com/api/?key=${l}&q=${o}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{c.innerHTML="",console.log(t),t.hits.length===0&&d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",messageColor:"#ffffff",messageSize:"16px",titleColor:"#ffffff"}),console.log(s(t.hits)),c.insertAdjacentHTML("beforeend",s(t.hits))}).catch(t=>console.log(t));function s(t){return t.map(({webformatURL:e,tags:r,largeImageURL:n,likes:u,views:f,comments:m,downloads:h})=>`<li>
             <a>
               <img src="${e}" alt="${r}" data-source="${n}" width="300">
             </a>
             <ul>
             <li>
               <h2>Likes</h2>
               <p>${u}</p>
             </li>
             <li>
               <h2>Views</h2>
               <p>${f}</p>
             </li>
             <li>
               <h2>Comments</h2>
               <p>${m}</p>
             </li>
             <li>
               <h2>Downloads</h2>
               <p>${h}</p>
             </li>
             </ul>
       </li>`).join("")}a.reset()});c.addEventListener("click",i=>{i.preventDefault();const o=i.target;if(o.nodeName!=="IMG")return;const s=o.dataset.source;if(!s){console.log("Велике зображення не знайдено.");return}basicLightbox.create(`
    <img src="${s}" alt="${o.alt}" width="800">
  `).show()});
//# sourceMappingURL=index.js.map
