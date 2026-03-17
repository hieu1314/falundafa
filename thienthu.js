/* =========================
FALUN DAFA LINKS
========================= */

const bookLinks=[
"https://vn.falundafa.org/book/zfl_2024_html/index.html"
]


/* =========================
CREATE HEAVEN BOOK
========================= */

let book=null

function spawnBook(){

const layer=document.getElementById("book-layer")

if(book) book.remove()

book=document.createElement("div")

book.className="flying-book"

const falun=document.createElement("div")
falun.className="book-falun"

book.appendChild(falun)


/* vị trí ngẫu nhiên */

const x=Math.random()*(window.innerWidth-120)
const y=Math.random()*(window.innerHeight-120)

book.style.left=x+"px"
book.style.top=y+"px"


/* click */

book.onclick=(e)=>{

e.stopPropagation()

const rect=book.getBoundingClientRect()

starBurst(rect.left+40,rect.top+30)

const file=bookLinks[Math.floor(Math.random()*bookLinks.length)]

setTimeout(()=>{

spawnFromLight(rect.left+40,rect.top+30,file)

},300)

}


layer.appendChild(book)


/* tồn tại 10s */

setTimeout(()=>{

book.remove()

/* ẩn 3s */

setTimeout(()=>{

spawnBook()

},3000)

},10000)

}


/* khởi chạy */

window.addEventListener("load",()=>{

setTimeout(spawnBook,4000)

})