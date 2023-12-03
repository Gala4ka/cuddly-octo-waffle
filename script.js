const calc=document.querySelector('.calc');
const result=document.querySelector('#result');
calc.addEventListener('click',function(event){
   if(!event.target.classList.contains('calc_btn')) return;
   
    const value =event.target.innerText;

    switch(value){
        case 'C':
            result.innerText='';
            break;
            case 'CE':
             result.innerText=eval(result.innerText.slice(0, -1));   
             break;  
            case'=':
            result.innerText=eval(result.innerText).toFixed(2);
            break;
            default:                  
            result.innerText += value;
    }

});