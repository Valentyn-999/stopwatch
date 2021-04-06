import React, {useState} from 'react';
import style from './Buttons.module.css'
import {Status} from "../App";

type PropsType = {
    status: Status
    start: () => void
    stop: () => void
    reset: () => void
    resume: () => void
}

export const Buttons = (props: PropsType) => {
    const [clickCount, setClickCount] = useState(0)

    const doubleClick = () => {
        setClickCount(clickCount + 1)

        setTimeout(() => {
            setClickCount(0)
        }, 300)

        if (clickCount === 1) {
           props.stop()
        }
    }

    return (
        <React.Fragment>
            {(props.status === Status.Ready) &&
                <button className={style.button} onClick={props.start}>Start</button>
            }

            {(props.status === Status.Go) &&
                <div className={style.group}>
                    <button className={style.button} onClick={doubleClick}>Wait</button>
                    <button className={style.button} onClick={props.reset}>Reset</button>
                </div>
            }

            {(props.status === Status.Stop) &&
                <div className={style.group}>
                    <button className={style.button} onClick={props.resume}>Resume</button>
                    <button className={style.button} onClick={props.reset}>Reset</button>
                </div>
            }
        </React.Fragment>
    )
}
