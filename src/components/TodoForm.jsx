import React, {useState, useRef, useEffect} from 'react'

const TodoForm = ({onSubmit, edit, editedTodo}) => {
    const [input, setInput] = useState(edit ? edit.title : '');

    useEffect(() => {
        setInput(prev => edit ? edit.title + prev : prev)
    }, [edit])

    const inputRef = useRef();
    
    const handleSubmit = (e) => {
        e.preventDefault()

        if (input.length > 1) {
            onSubmit({
                id: Date.now(),
                title: input
            })            
        }
        setInput('')
    }
    useEffect(() => {
        inputRef.current.focus()
    }) 

    const handleEdit = (e) => {
        e.preventDefault()
        editedTodo({...edit, title: input})
        setInput('')
    }

    return ( 
        <form onSubmit={e => e.preventDefault()} className='todo-form'>
            {edit.isEdit ? (
                <>
                    <input 
                        ref={inputRef}
                        type="text"
                        className='todo-input'
                        placeholder='Add a todo...'
                        value={input}
                        onChange={e => setInput(e.target.value)}
                    />
                    <button onClick={handleEdit} type='button' className='todo-btn'>Edit</button>
                </>
            ) : (
                <>
                    <input 
                        ref={inputRef}
                        type="text"
                        className='todo-input'
                        placeholder='Add a todo...'
                        value={input}
                        onChange={e => setInput(e.target.value)}
                    />
                    <button onClick={handleSubmit} type='button' className='todo-btn'>Add</button>
                </>
            )}
        </form>
    );
}
 
export default TodoForm;