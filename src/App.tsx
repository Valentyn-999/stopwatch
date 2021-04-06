import React, {FC, useState} from 'react';
import {Display} from './components/Display';
import {Buttons} from './components/Buttons';
import style from './App.module.css';
import './App.css';

export enum Status {
    Ready,
    Go,
    Stop
}

export type TimeType = {
    s: number,
    m: number,
    h: number
}

export const App: FC = () => {

    const [time, setTime] = useState<TimeType>({s: 0, m: 0, h: 0})
    const [interv, setInterv] = useState<any>()
    const [status, setStatus] = useState<Status>(Status.Ready)

    let updatedS = time.s,
        updatedM = time.m,
        updatedH = time.h

    const start = () => {
        getStarted()
        setStatus(Status.Go)
        setInterv(setInterval(getStarted, 1000))
    }

    const getStarted = () => {
        if (updatedM === 60) {
            updatedH++
            updatedM = 0
        }
        if (updatedS === 60) {
            updatedM++
            updatedS = 0
        }
        updatedS++
        return setTime({s: updatedS, m: updatedM, h: updatedH})
    }

    const stop = () => {
        clearInterval(interv)
        setStatus(Status.Stop)
    }

    const reset = () => {
        clearInterval(interv)
        setStatus(Status.Ready)
        setTime({s: 0, m: 0, h: 0})
    }

    const resume = () => start()

    return (
        <React.Fragment>
            <div className={style.mainContainer}>
                <div className={style.clock}>
                    <div className={style.display}>
                        <Display time={time}/>
                    </div>
                    <div className={style.buttons}>
                        <Buttons status={status} resume={resume} reset={reset}
                                 stop={stop} start={start}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
