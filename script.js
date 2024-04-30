const imgs = document.querySelectorAll(".hero-slider ul img")
const prevBtn = document.querySelector(".control-prev")
const nextBtn = document.querySelector(".control-next")

let n = 0;

function changeSlider(){
    for(let i =0; i<imgs.length; i++){
        imgs[i].style.display='none'
    }
    imgs[n].style.display='block'
}changeSlider()

prevBtn.addEventListener('click', (e)=>{
    if(n>0){
        n--
    }else{
        n =imgs.length - 1
    }
    changeSlider()
})

nextBtn.addEventListener('click', ()=>{
    if(n< imgs.length -1){
        n++
    }else{
        n = 0
    }
    changeSlider()
})