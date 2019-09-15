class Todo {
    id: number
    title: string
    completed: boolean

    static nextId = 0;
    
    constructor(title: string) {
        Todo.nextId++
        this.id = Todo.nextId;
        this.title = title;
        this.completed = false;
    }
}



export { Todo }