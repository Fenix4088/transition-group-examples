import React, {useState} from 'react';
import {Transition} from 'react-transition-group';

// import s from './SimpleLoader.module.scss';
import './simpleloader.css'

export const SimpleLoader = (props) => {

    const [isLoaderVisible, setIsLoaderVisible] = useState(false);

    return (
        <div className={'loaderWrapper'}>
            <button onClick={() => setIsLoaderVisible(!isLoaderVisible)}>show</button>
            <div className={'wrap'}>
                <Transition in={isLoaderVisible} timeout={300} mountOnEnter unmountOnExit>
                    {state => <div className={`circle ${state}`}/>}
                </Transition>
            </div>


        </div>

    )
}