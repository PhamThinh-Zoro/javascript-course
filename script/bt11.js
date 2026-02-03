// const result=JSON.parse(localStorage.getItem('todoList')) ||
// [];
const todoList=[];
let todoListHTML='';
function addTodo(){
    const inp=document.querySelector('.name-input');
    const date=document.querySelector('.date-input');
    todoList.push(inp.value);
    todoList.push(date.value);
    todoListHTML='';
    inp.value='';
    for(let i=0;i<todoList.length;i++){
        todoListHTML+=`<p>${todoList[i]}</p>`;

    }
    //localStorage.setItem('todoList',JSON.stringify(todoList))
    document.querySelector('.todo-grid').innerHTML=todoListHTML;
}
function save(){
    localStorage.setItem('todoList',JSON.stringify(todoList));
}