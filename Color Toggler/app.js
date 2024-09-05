let toggler = document.getElementById("switch");

toggler.addEventListener("click", () =>{
    if  (toggler.checked === true){
        document.body.style.backgroundColor="Black"
    }else{
        document.body.style.backgroundColor="White"
    }
})

