export const addTodo = (todo) => (
    {
        type: 'ADD_TODO',
        todo
    }
)

export const removeTodo = (id) => (
    {
        type: 'REMOVE_TODO',
    }
)
