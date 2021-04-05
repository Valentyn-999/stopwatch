import React, {useState} from 'react';

type PropsType = {
    status: number
    start: () => void
    stop: () => void
    reset: () => void
    resume: () => void
}

export const Buttons = (props: PropsType) => {
    const [cc, setCc] = useState(0)

    const doubleClick = () => {
        setCc(cc + 1)

        setTimeout(() => {
            setCc(0)
        }, 300)

        if (cc === 1) {
           props.stop()
        }
    }

    return (
        <div>
            {(props.status === 0)?
                <button className="stopwatch-btn stopwatch-btn-gre"
                        onClick={props.start}>Start</button> : ""
            }

            {(props.status === 1)?
                <div>
                    <button className="stopwatch-btn stopwatch-btn-red"
                            onClick={ doubleClick }>Wait</button>
                    <button className="stopwatch-btn stopwatch-btn-yel"
                            onClick={ () => props.reset() }>Reset</button>
                </div> : ""
            }

            {(props.status === 2)?
                <div>
                    <button className="stopwatch-btn stopwatch-btn-gre"
                            onClick={props.resume}>Resume</button>
                    <button className="stopwatch-btn stopwatch-btn-yel"
                            onClick={ () => props.reset() }>Reset</button>
                </div> : ""
            }

        </div>
    )
}
