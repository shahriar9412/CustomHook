import React from 'react'
import useFetch from '../CustomHooks/useFetch'

const DataFetch = () => {
    const { data, isLoading, error } = useFetch('https://jsonplaceholder.typicode.com/todos')
    const todos = data && data.map((todo) => {
        return (
            <p key={todo.id}>{todo.id}<br />{todo.title}</p>
        )
    })
    return (
        <div>
            <h1>Todos</h1>
            {isLoading && <p>Todos are loading</p>}
            {error && <p>Fetching is not successful!</p>}
            {todos}
        </div>
    )
}

export default DataFetch
