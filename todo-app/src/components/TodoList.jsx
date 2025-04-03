import TodoItem from "./TodoItem";

function TodoList({handleClick, todos}) {

    return (
        <ul>
            {
                todos.map(todo => {
                    return <TodoItem 
                        key={todo.id}
                        todo={todo}
                        handleTodoClick={handleClick}
                    />
                })
            }
        </ul>
    )
}

export default TodoList;