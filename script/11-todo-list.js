const todoList=[
    {name:'Ronaldo',
        date:'2022-08-09'
    },
    {name:'Messi',
        date:'2024-09-18'
    }
];
render();
function addTodo(){
    const name=document.querySelector('.add');
    const date=document.querySelector('.date');
    todoList.push({
        name:name.value,
        date:date.value
    });
    name.value=date.value='';
    render();
}
function render(){
    let todoListHTML='';
    for(let i=0;i<todoList.length;i++){
        todoListHTML+=`
            <div>
                ${todoList[i].name}
            </div>
            <div>
                ${todoList[i].date}
            </div>
            <button onclick="
                deleteTodo(${i});
            ">Delete</button>
        `;
    }
    document.querySelector('.result').innerHTML=todoListHTML;    
}
function deleteTodo(i){
    todoList.splice(i,1);
    render();
}