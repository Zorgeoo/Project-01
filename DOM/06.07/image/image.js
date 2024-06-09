const slide = document.querySelector('.box')
const nextButton=document.querySelector("#next")
const prevButton=document.querySelector("#previous")
// slide.addEventListener("wheel",(evt)=>{
//     evt.preventDefault()
//     slide.scrollLeft+=evt.deltaY;
// })
nextButton.addEventListener("click",()=>{
    slide.style.scrollBehavior="smooth";
    slide.scrollLeft+=300;
})

prevButton.addEventListener("click",()=>{
    slide.scrollLeft-=300;
    slide.style.scrollBehavior="smooth";
})


