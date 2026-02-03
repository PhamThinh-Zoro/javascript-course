            let cal=localStorage.getItem('cal') || '';
            function calculate(s){
                cal+=s;
                document.querySelector('.result')
                .innerHTML=cal;
                save();
            }
            function save(){
                localStorage.setItem('cal',cal);
            }