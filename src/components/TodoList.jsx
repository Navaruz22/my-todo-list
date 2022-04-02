import React from 'react';
import {FaRegWindowClose} from 'react-icons/fa'
import {BiEdit} from 'react-icons/bi'

const TodoList = ({lists, removeTodo, editTodo}) => {
    return ( 
        <ul className='todo-list'>
            {lists.map(list => 
                <li key={list.id} className="todo-item">
                    <span>{list.title}</span>
                    <div className="todo-icons">
                        <BiEdit onClick={() => editTodo({isEdit: true, id: list.id, title: list.title })} className='todo-edit'/>
                        <FaRegWindowClose className='todo-delete' onClick={() => removeTodo(list.id)} />
                    </div>
                </li>    
            )}
        </ul>
     );
}

 
export default TodoList;