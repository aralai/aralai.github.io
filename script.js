let translations={}

async function loadLanguage(lang){

const res=await fetch(`translations/${lang}.json`)
translations=await res.json()

applyTranslations()

}

function applyTranslations(){

const elements=document.querySelectorAll("[data-i18n]")

 elements.forEach(el=>{

 const keys=el.dataset.i18n.split('.')

 let text=translations

 keys.forEach(k=>{
 text=text[k]
 })

 el.innerText=text

 })

}


document.getElementById("languageSwitcher")
.addEventListener("change",e=>{

loadLanguage(e.target.value)

})

loadLanguage("fr")



// PARALLAX

window.addEventListener("scroll",()=>{

const scrolled=window.pageYOffset

const bg1=document.querySelector(".bg1")
const bg2=document.querySelector(".bg2")

bg1.style.transform=`translateY(${scrolled*0.4}px)`

bg2.style.transform=`translateY(${scrolled*0.2}px)`

})
