import React,{useState} from 'react'

function TodoForm() {
    const [input,setInput] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        
    };
    return (
        <form className='todo-form'>
            <input
            type='text'
            plaacholder='Add a photo'
            value={input}
            nmae='text'
            className='todo-button'
            />
            <button className="todo-button">Add todo</button>
        </form>
    )
}

export default TodoForm
