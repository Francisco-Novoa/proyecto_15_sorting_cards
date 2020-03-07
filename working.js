
let numeros, hand;
let draw=document.getElementById("draw");
let sort=document.getElementById("sort");
let bubble=document.getElementById("bubble");
let select=document.getElementById("select");
let insertion=document.getElementById("insertion");

draw.addEventListener("click",function(){
    numeros=parseInt(document.getElementById("text").value)
    hand=randomhand(numeros);
    drawer(hand);

})

sort.addEventListener("click",function(){
    hand=Sort(hand);
})

bubble.addEventListener("click",function(){
    document.querySelector("script").innerHTML(`<script id="lonk" type="text/javascript" src="sorting_algoritm.js"></script>`);
})

select.addEventListener("click",function(){
    document.querySelector("script").innerHTML(`<script id="lonk" type="text/javascript" src="sorting_algoritm2.js"></script>`);
})

insertion.addEventListener("click",function(){
    document.getElementById("lonk").innerHTML(`<script id="lonk" type="text/javascript" src="sorting_algoritm3.js"></script>`);
})