let button=document.querySelectorAll('button');
function changVal(a){
    let val=document.querySelector('.value');
    let currentval=Number(val.textContent);
    val.textContent=currentval+a;
}
button[0].addEventListener('click',()=>changVal(-1));
button[1].addEventListener('click',()=>changVal(+1));