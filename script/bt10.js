function f(s){
    let button=document.querySelector(s);
    if(!button.classList.contains('is-toggled')){
        turnoff();
        button.classList.add('is-toggled')
    }
    else
        button.classList.remove('is-toggled');
}
function turnoff(){
    let pre=document.querySelector('.is-toggled');
    if(pre){
        pre.classList.remove('is-toggled');
    }
}