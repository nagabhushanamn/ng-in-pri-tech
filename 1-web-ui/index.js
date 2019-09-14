
console.log("-index.js-");

//-------------------------------------------
// DOM API
//-------------------------------------------

let box = document.querySelector('.alert');
let nextBtn = document.querySelector('.btn-primary');
let hideBtn = document.querySelector('.btn-danger');
let showBtn = document.querySelector('.btn-success');

nextBtn.addEventListener('click', e => {
    box.innerHTML = "Eat biryani";
})

hideBtn.addEventListener('click', e => {
    box.style.display = 'none'
})

showBtn.addEventListener('click', e => {
    box.style.display = ''
})

//-------------------------------------------
// DOM + XHR/Fetch API
//-------------------------------------------

let todosBtn = document.getElementById('todos-btn');
todosBtn.addEventListener('click', e => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos?_limit=5';
    let promise = fetch(apiUrl);
    document.getElementById('progress').innerHTML = "loading todos.."
    promise
        .then(response => response.json())
        .then(todos => {
            document.getElementById('progress').innerHTML = ""
            let elements = todos.map(todo => {
                return `
                    <li class="list-group-item ${todo.completed ? 'bg-success' : ''}">
                        <span>${todo.id}</span>
                        <span>${todo.title}</span>
                        <span>${todo.completed}</span>
                    </li>
                `
            });
            document.getElementById('todos').innerHTML = elements.join(" ")
        })
})


//-------------------------------------------
// DOM + Timer API
//-------------------------------------------

let timeEle = document.getElementById('time');
setInterval(() => {
    timeEle.innerHTML = new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' })
}, 1000)