const typeTextSpan = document.querySelector(".typed-text"); 
const cursor = document.querySelector(".cursor");

const word = ['Trajkovski', 'Web Developer', 'Student'];
const typingDelay = 100;
const erasingDelay = 100;
const newLetterDelay = 100;

let index = 0; 
let charIndex = 0;

document.addEventListener("DOMContentLoaded", () =>{
   if(word.length){
    setTimeout(type, newLetterDelay);
   }
})

function type(){
    if(charIndex < word[index].length)
{
    typeTextSpan.textContent += word[index].charAt(charIndex);
    setTimeout(type, typingDelay);
    charIndex++;
}else{
    setTimeout(erase, newLetterDelay);
}
}

function erase(){
    if(charIndex > 0){
        typeTextSpan.textContent = word[index].substring(0, charIndex -1);
        charIndex--;
        setTimeout(erase, newLetterDelay);
    }else{
        index++; 
        if(index >= word.length){
            index = 0;
        }
        setTimeout(type, typingDelay + 1000);
    }
}