import React, {useState} from 'react';
import './transitionGroupCompStyles.css';
import {CSSTransition, TransitionGroup} from "react-transition-group";

export const TransitionGroupComp = (props) => {
    const [text, setText] = useState('');
    const [todoList, setTodoList] = useState([
        {id: 1, text: 'HTML'},
        {id: 2, text: 'CSS'},
        {id: 3, text: 'JavaScript'},
        {id: 4, text: 'NodeJs'}
    ])

    const addTodo = () => {
        setTodoList([...todoList, {id: Date.now(), text}])
    }

    const removeListItem = (e) => {
        setTodoList([...todoList.filter(el => el.id !== +e.currentTarget.id)]);
    }

    return (
        <div className={'wrapper'}>
            <div>
                <input value={text} type="text" onChange={(e) => setText(e.currentTarget.value)}/>
                <button onClick={addTodo}>Add</button>
            </div>
            <TransitionGroup component={'ul'}>
                {todoList.map(({text, id}) => {
                    return <CSSTransition classNames={'todo'} key={id} timeout={500}>
                        <li className={'todo'}  onClick={removeListItem} id={id}>{text}</li>
                    </CSSTransition>
                })}
            </TransitionGroup>

        </div>

    )
}