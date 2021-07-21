import React, {useState} from 'react';
import {CSSTransition, SwitchTransition} from "react-transition-group";
// import './switchtransition.css';
import s from './SwitchTransition.module.scss'

export const SwitchTransitionComp = (props) => {

    const [mode, setMode] = useState('out-in');
    const [toggle, setToggle] = useState(false);

     const changeHandler = (e) => {
         setMode(e.currentTarget.value);
    }

    return (
        <div className={s.wrapper}>
            <div >
                <label htmlFor={'out-in'} className={s.lable}></label>
                <input onChange={changeHandler} id={'out-in'} name={'radio'} value={'out-in'} type="radio"/>
                <label htmlFor={'in-out'} className={s.lable}></label>
                <input onChange={changeHandler} id={'in-out'} name={'radio'} value={'in-out'} type="radio"/>
            </div>

            <SwitchTransition mode={mode}>
                <CSSTransition key={toggle} timeout={500} classNames={{
                    appear: s['fade'],
                    enter: s['fade-enter'],
                    exit: s['fade-exit'],
                }}>
                    <button onClick={() => setToggle(!toggle)}>
                        {toggle ? 'Hello' : 'Bue'}
                    </button>
                </CSSTransition>
            </SwitchTransition>
        </div>

    )
}