// ===============================
// HELPERS
// ===============================

function q(s){return document.querySelector(s)}


// ===============================
// GLOBAL STYLE
// ===============================

const style=document.createElement("style")

style.innerHTML=`

/* =========================
VIEWER (IMAGE / VIDEO)
========================= */

#viewer.hidden{display:none;}

#viewer{

position:fixed;
inset:0;

background:rgba(0,0,0,.88);

display:flex;
justify-content:center;
align-items:center;

z-index:9999;

animation:fadeIn 1s;

}

#viewer img,
#viewer video{

max-width:90%;
max-height:80vh;

border-radius:12px;

animation:contentFade 1.2s;

}

#viewer .close{

position:absolute;
top:20px;
right:25px;

font-size:36px;
color:white;
cursor:pointer;

}

#prevImg,#nextImg{

position:absolute;
top:50%;

transform:translateY(-50%);

font-size:40px;

background:none;
border:none;

color:white;

cursor:pointer;

}

#prevImg{left:20px;}
#nextImg{right:20px;}



/* =========================
STAR BURST (TIA SÁNG)
========================= */

.star-burst{

position:fixed;

width:20px;
height:20px;

pointer-events:none;

z-index:99999;

}

.star-ray{

position:absolute;

left:-150px;
top:-2px;

width:320px;
height:4px;

background:linear-gradient(
90deg,
transparent,
white,
transparent
);

transform-origin:160px 2px;

}

.star-burst{

animation:burstExpand 2s ease-out forwards;

filter:
drop-shadow(0 0 20px white)
drop-shadow(0 0 80px white);

}

@keyframes burstExpand{

0%{
transform:scale(.1);
opacity:1;
}

40%{
transform:scale(1.5);
opacity:1;
}

75%{
transform:scale(3);
opacity:.9;
}

100%{
transform:scale(5);
opacity:0;
}

}

/* =========================
DOCUMENT VIEWER
========================= */

#scrollViewer{

position:fixed;
inset:0;

background:rgba(0,0,0,.9);

display:flex;
justify-content:center;
align-items:center;

z-index:99999;

animation:fadeIn 1.2s;

}

.scroll-paper{

width:96vw;
height:94vh;

background:#f5e6c8;

border-radius:14px;

box-shadow:
0 0 90px rgba(0,0,0,.9),
inset 0 0 40px rgba(0,0,0,.35);

overflow:hidden;

animation:contentFade 1.6s;

}

.scroll-frame{

width:100%;
height:100%;

border:none;

}

.scroll-close{

position:absolute;

top:10px;
right:18px;

font-size:28px;

cursor:pointer;

color:#5a3b1a;

}



/* =========================
ANIMATIONS
========================= */

@keyframes fadeIn{

from{opacity:0}
to{opacity:1}

}

@keyframes contentFade{

0%{
opacity:0;
transform:scale(.94);
}

100%{
opacity:1;
transform:scale(1);
}

}

/* =========================
LIGHT SPAWN EFFECT
========================= */

.viewer-spawn{
position:fixed;
z-index:99998;

transform:translate(-50%,-50%) scale(.1);
opacity:0;

animation:spawnLight 0.9s ease-out forwards;

filter:
drop-shadow(0 0 20px white)
drop-shadow(0 0 80px white);
}

@keyframes spawnLight{

0%{
transform:translate(-50%,-50%) scale(.1);
opacity:0;
}

40%{
opacity:1;
}

100%{
transform:translate(-50%,-50%) scale(1);
opacity:1;
}

}

`

document.head.appendChild(style)


// ===============================
// DATA LINKS
// ===============================

const starLinks=[

"https://vaotrlttfbkoxnuimdnf.supabase.co/storage/v1/object/public/family-photos/uploadrecent/thuctinh1.mp4",
"https://vaotrlttfbkoxnuimdnf.supabase.co/storage/v1/object/public/family-photos/falundafa/note1.png",
"https://vaotrlttfbkoxnuimdnf.supabase.co/storage/v1/object/public/family-photos/falundafa/note2.png",
"https://vaotrlttfbkoxnuimdnf.supabase.co/storage/v1/object/public/family-photos/falundafa/note3.png",
"https://vi.falundafa.org/book/zfl2_hv_html/zfl2_11_hv.html",
"https://vi.minghui.org/news/241240-vi-sao-co-nhan-loai.html",
"https://vi.minghui.org/news/271809-vi-sao-xa-hoi-nhan-loai-la-me.html",
"https://vi.minghui.org/news/245004-tai-sao-can-phai-cuu-do-chung-sinh.html",
"https://vi.minghui.org/news/266671-kinh-tinh.html"

]


// ===============================
// STAR BURST EFFECT
// ===============================

function starBurst(x,y){

const burst=document.createElement("div")

burst.className="star-burst"

burst.style.left=x+"px"
burst.style.top=y+"px"

for(let i=0;i<30;i++){

const ray=document.createElement("div")

ray.className="star-ray"

ray.style.transform=`rotate(${i*10}deg)`

burst.appendChild(ray)

}

document.body.appendChild(burst)

setTimeout(()=>burst.remove(),2000)

}


function spawnFromLight(x,y,file){

const temp=document.createElement("div")
temp.className="viewer-spawn"

temp.style.left=x+"px"
temp.style.top=y+"px"

let el

if(file.endsWith(".mp4")){

el=document.createElement("video")
el.src=file
el.autoplay=true
el.loop=true
el.muted=true

}else{

el=document.createElement("img")
el.src=file

}

el.style.maxWidth="220px"
el.style.borderRadius="10px"

temp.appendChild(el)

document.body.appendChild(temp)

setTimeout(()=>{
temp.remove()

if(file.endsWith(".html")){
openScrollViewer(file)
}else{
openViewer([file])
}

},900)

}

// ===============================
// FLYING STARS
// ===============================

function createFlyingStar(){

const star=document.createElement("div")
star.className="flying-star twinkle"

const startX=Math.random()*window.innerWidth
const startY=Math.random()*window.innerHeight

const endX=startX+(Math.random()*400-200)
const endY=startY+(Math.random()*400-200)

star.style.left=startX+"px"
star.style.top=startY+"px"

const duration=6+Math.random()*3

star.onclick=(e)=>{

e.stopPropagation()

const rect=star.getBoundingClientRect()

starBurst(
rect.left+8,
rect.top+8
)

const file=starLinks[Math.floor(Math.random()*starLinks.length)]

setTimeout(()=>{

spawnFromLight(
rect.left+8,
rect.top+8,
file
)

},300)

star.remove()

}

document.getElementById("star-layer").appendChild(star)

setTimeout(()=>{

star.style.transition=`all ${duration}s linear`

star.style.left=endX+"px"
star.style.top=endY+"px"
star.style.opacity=0

},50)

setTimeout(()=>star.remove(),duration*1000)

}

setInterval(createFlyingStar,400)



// ===============================
// IMAGE + VIDEO VIEWER
// ===============================

window.openViewer=function(files){

const viewer=q("#viewer")
const img=q("#viewerImg")

let video=q("#viewerVideo")

if(!video){

video=document.createElement("video")
video.id="viewerVideo"
video.controls=true
video.style.display="none"

viewer.appendChild(video)

}

let index=0

function show(){

const f=files[index]

if(f.endsWith(".mp4")){

video.src=f
video.style.display="block"
img.style.display="none"

}else{

img.src=f
img.style.display="block"
video.style.display="none"

}

}

show()

viewer.classList.remove("hidden")

q("#prevImg").onclick=()=>{
index=(index-1+files.length)%files.length
show()
}

q("#nextImg").onclick=()=>{
index=(index+1)%files.length
show()
}

window.closeViewer=()=>{
viewer.classList.add("hidden")
video.pause()
}

}



// ===============================
// DOCUMENT VIEWER
// ===============================

function openScrollViewer(url){

let scroll=document.getElementById("scrollViewer")

if(scroll)scroll.remove()

scroll=document.createElement("div")
scroll.id="scrollViewer"

scroll.innerHTML=`

<div class="scroll-paper">

<span class="scroll-close">✕</span>

<iframe class="scroll-frame" src="${url}"></iframe>

</div>

`

document.body.appendChild(scroll)

scroll.querySelector(".scroll-close").onclick=()=>scroll.remove()

}