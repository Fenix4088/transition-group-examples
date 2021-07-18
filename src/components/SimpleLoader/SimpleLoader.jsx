import React, {useState} from 'react';
import {CSSTransition, Transition} from 'react-transition-group';

import s from './SimpleLoader.module.scss';
// import './simpleloader.css'

export const SimpleLoader = (props) => {

    const [isLoaderVisible, setIsLoaderVisible] = useState(false);

    return (
        <div className={s.loaderWrapper}>
            <button onClick={() => setIsLoaderVisible(!isLoaderVisible)}>show</button>
            <div className={s.wrap}>
                <CSSTransition in={isLoaderVisible} timeout={500} classNames={{
                    enterActive: s['circle-show'],
                    enterDone: s['circle-rotate'],
                    exitActive: s['circle-hide'],
                }} mountonEnter unmountOnExit>
                    <div className={s.circle}/>
                </CSSTransition>
            </div>

        </div>

    )
}