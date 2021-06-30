import React,{useState} from 'react'

function TodoForm(props) {
    const [input,setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id:Math.floor(Math.random() * 10000),
            text:input
        });
        setInput('');
    };
    
    return (
        <form className='todo-form'>
            <input
            type='text'
            plaacholder='Add a photo'
            value={input}
            nmae='text'
            className='todo-input'
            onChange={handleChange}
            />
            <button className="todo-button" onClick={handleSubmit}>Add todo</button>
        </form>
    )
}

export default TodoForm
