let a = document.querySelectorAll("li");
let anc = document.querySelectorAll("a");


a[0].addEventListener("click", function (){
    window.alert(a[0].textContent);
})

a[1].addEventListener("click", function (){
    window.alert(a[1].innerHTML);
})

a[2].addEventListener("click",()=>{
    window.alert(anc[5].href);
})

a[3].addEventListener("click",()=>{
    window.alert(document.getElementById("img-exercise").getAttribute("src"));
})

a[4].addEventListener("click",()=>{
    window.alert(document.getElementById("button-exercise").getAttribute("value"));
})

