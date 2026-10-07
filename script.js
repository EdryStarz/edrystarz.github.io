const feedback=document.querySelector('#feedback');let noticeTimer;
function notice(text){feedback.textContent=text;clearTimeout(noticeTimer);noticeTimer=setTimeout(()=>feedback.textContent='',4500)}
async function copyLink(url){try{await navigator.clipboard.writeText(url);notice('Link copied. Send it to someone who needs it.')}catch{window.prompt('Copy this project link:',url)}}
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{const filter=button.dataset.filter;document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));let count=0;document.querySelectorAll('[data-category]').forEach(card=>{card.hidden=filter!=='All'&&card.dataset.category!==filter;if(!card.hidden)count++});notice(`${count} projects shown`)}));
document.querySelectorAll('[data-copy]').forEach(button=>button.addEventListener('click',()=>copyLink(button.dataset.copy)));
document.querySelectorAll('[data-share]').forEach(button=>button.addEventListener('click',async()=>{const url=button.dataset.share;try{if(navigator.share)await navigator.share({title:document.title,url});else await copyLink(url)}catch(error){if(error.name!=='AbortError')await copyLink(url)}}));
const ambient=document.querySelector('[data-ambient-video]');
const control=document.querySelector('[data-video-control]');
if(ambient&&control){
 const motion=matchMedia('(prefers-reduced-motion: reduce)');let manualPause=false;let inView=true;
 function sync(){if(motion.matches||navigator.connection?.saveData){ambient.pause();ambient.removeAttribute('src');ambient.load();control.hidden=true;return;}if(!ambient.getAttribute('src'))ambient.src='/assets/hero.mp4';control.hidden=false;if(manualPause||document.hidden||!inView){ambient.pause();}else{ambient.play().catch(()=>{manualPause=true;control.textContent='Play background';});}control.textContent=manualPause?'Play background':'Pause background';}
 control.addEventListener('click',()=>{manualPause=!manualPause;sync();});motion.addEventListener('change',sync);document.addEventListener('visibilitychange',sync);new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;sync();}).observe(ambient);sync();
}
