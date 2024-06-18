const container=document.querySelector(".container")
const signUpButton=document.querySelector(".signUpButton")
const signInButton=document.querySelector(".signInButton")

signUpButton.addEventListener("click",()=>{
    container.classList.add("active")
})
signInButton.addEventListener("click",()=>{
    container.classList.remove("active")
})