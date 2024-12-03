import{S as g,i as n}from"./assets/vendor-5ObWk2rO.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const f="47418374-a80c993bb5abb784419bb47e5",c=document.querySelector(".form"),a=document.querySelector(".gallery");let y=new g(".gallery .gallery-link",{captions:!0,captionsData:"alt",captionDelay:250});function b(){loader.style.display="block"}function u(){loader.style.display="none"}c.addEventListener("submit",o=>{if(o.preventDefault(),b(),o.target.elements.search.value===""){a.innerHTML="",n.error({title:"Error",message:"Please try again! Enter what you want to find",position:"topRight",backgroundColor:"#ef4040",messageColor:"#ffffff",messageSize:"16px",titleColor:"#ffffff"}),u();return}const i=new URLSearchParams({key:f,q:o.target.elements.search.value,image_type:"photo",orientation:"horizontal",safesearch:"true"});console.log(o.target.elements.search.value),fetch(`https://pixabay.com/api/?key=${f}&q=${i}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{a.innerHTML="",t.hits.length===0&&n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",messageColor:"#ffffff",messageSize:"16px",titleColor:"#ffffff"}),a.insertAdjacentHTML("beforeend",l(t.hits)),y.refresh()}).catch(t=>console.log(t)).finally(()=>{u()});function l(t){return t.map(({webformatURL:e,tags:r,largeImageURL:s,likes:h,views:p,comments:m,downloads:d})=>`<li>
             <a class="gallery-link" href="${s}">
               <img src="${e}" alt="${r}" width="300">
             </a>
             <ul>
             <li>
               <h2>Likes</h2>
               <p>${h}</p>
             </li>
             <li>
               <h2>Views</h2>
               <p>${p}</p>
             </li>
             <li>
               <h2>Comments</h2>
               <p>${m}</p>
             </li>
             <li>
               <h2>Downloads</h2>
               <p>${d}</p>
             </li>
             </ul>
       </li>`).join("")}c.reset()});
//# sourceMappingURL=index.js.map
