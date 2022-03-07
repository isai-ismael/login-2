var input=document.querySelectorAll(".campo")
var div=document.querySelectorAll(".form__div")
input.forEach(function(el, index){
    el.addEventListener("focus", function(){
        if (index==0) {
            div[0].style.border="solid 1px black"
            div[1].style.border="solid 1px rgb(145, 145, 145)"
        } else {
            if (index==1) {
                div[1].style.border="solid 1px black"
                div[0].style.border="solid 1px rgb(145, 145, 145)"
            }
        }
    })
})