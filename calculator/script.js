let s="";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(run)=>{
        if(run.target.innerHTML == '='){
            s=eval(s);
            document.querySelector('.textinput').value=s;
        }
        else if(run.target.innerHTML == 'C' || run.target.innerHTML=='AC'){
            s="";
            document.querySelector('.textinput').value = s;
        }
        else{
            s=s+run.target.innerHTML;
            document.querySelector('.textinput').value = s;
        }
    })
})