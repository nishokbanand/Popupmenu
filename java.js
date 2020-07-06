let openbutton = document.querySelector(".openbutton");

let closebutton = document.querySelector(".closebutton");

let modal = document.querySelector(".modal");



openbutton.addEventListener("click",function(){
    modal.style.display = "block";
})

closebutton.addEventListener("click",function() {
    modal.style.display="none"
})

window.addEventListener("click",function(e){
    if(e.target == modal){
        modal.style.display="none"
    }
})
console.log('helo')