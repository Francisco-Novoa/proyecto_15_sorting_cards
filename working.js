
let numeros;
let draw=document.getElementById("draw");
let sort=document.getElementById("sort");
let hand;

draw.addEventListener("click",function(){
    numeros=parseInt(document.getElementById("text").value)
    hand=randomhand(numeros);
    drawer(hand);

})

sort.addEventListener("click",function(){
    hand=Sort(hand);
})