import{S as m,i as a}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function g(i){return i.map(({webformatURL:o,tags:r,largeImageURL:l,likes:e,views:t,comments:s,downloads:p})=>`<li class="li-item">
             <a class="gallery-link" href="${l}">
               <img class="gallery-img" src="${o}" alt="${r}" width="300">
             </a>
             <div>
               <ul class="image-description">
               <li>
                 <h2>Likes</h2>
                 <p>${e}</p>
               </li>
               <li>
               <h2>Views</h2>
               <p>${t}</p>
               </li>
               <li>
                 <h2>Comments</h2>
                 <p>${s}</p>
               </li>
               <li>
                 <h2>Downloads</h2>
                 <p>${p}</p>
               </li>
               </ul>
             </div>  
       </li>`).join("")}let h=new m(".gallery .gallery-link",{captions:!0,captionsData:"alt",captionDelay:250});const f="47418374-a80c993bb5abb784419bb47e5",c=document.querySelector(".gallery");function y(i){const o=new URLSearchParams({key:f,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"});fetch(`https://pixabay.com/api/?key=${f}&q=${o}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{r.hits.length===0&&a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",messageColor:"#ffffff",messageSize:"16px",titleColor:"#ffffff"}),c.innerHTML="",console.log(r),c.insertAdjacentHTML("beforeend",g(r.hits)),h.refresh()}).catch(r=>{a.error({title:"Error",message:`An error occurred: ${r.message}`,position:"topRight",backgroundColor:"#ef4040",messageColor:"#ffffff",messageSize:"16px",titleColor:"#ffffff"})}).finally(()=>{d()})}const n=document.querySelector(".form"),b=document.querySelector(".gallery");function u(){loader.style.display="block"}function d(){loader.style.display="none"}n.dataset.listenerAdded||(n.addEventListener("submit",i=>{i.preventDefault();const r=i.target.elements.search.value.trim();if(u(),r)u(),y(r);else{a.warning({title:"Warning",message:"Please enter a search query!",position:"topRight",backgroundColor:"#f39c12",messageColor:"#ffffff",messageSize:"16px",titleColor:"#ffffff"}),b.innerHTML="",d();return}n.reset()}),n.dataset.listenerAdded=!0);
//# sourceMappingURL=index.js.map
