            function handleCostKeyDown(event){
                if(event.key=='Enter') caculate();
            }
            function change(){
                let a=document.querySelector('.subscribe');
                if(a.innerText=='Subscribe') {
                    a.innerHTML='Subscribed';
                    a.classList.add('is-subscribed');
                }
                else {
                    a.innerHTML='Subscribe';
                    a.classList.remove('is-subscribed');
                }
            }
            function caculate(){
                let cost=Number(document.querySelector('.cost')
                .value);
                let s=document.querySelector('.error');
                s.innerHTML=' ';
                if(cost>=0){
                    if(cost<40) cost+=10;
                    document.querySelector('.result')
                    .innerHTML=`$${cost}`;
                }
                else{
                    s.innerHTML='Error: cost cannot be less than $0';
                }
            }   

